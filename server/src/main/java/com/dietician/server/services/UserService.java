package com.dietician.server.services;

import com.dietician.server.db.entities.*;
import com.dietician.server.db.enums.UserRole;
import com.dietician.server.db.repositories.FoodDiaryRepository;
import com.dietician.server.db.repositories.NutrientsPerDayRepository;
import com.dietician.server.db.repositories.ProductRepository;
import com.dietician.server.db.repositories.UserRepository;
import com.dietician.server.dtos.responses.ConsumptionProductResponse;
import com.dietician.server.dtos.responses.ProductResponse;
import com.dietician.server.dtos.responses.UserDailyCaloriesSumResponse;
import com.dietician.server.dtos.responses.UserGoalDataResponse;
import com.dietician.server.utilities.converters.UserDailyCaloriesConverter;
import com.dietician.server.utilities.converters.UserDataConverter;
import com.dietician.server.utilities.converters.UserProductsConverter;
import com.dietician.server.utilities.exceptions.FoodDiaryNotFoundException;
import com.dietician.server.utilities.exceptions.ProductNotFoundException;
import com.dietician.server.utilities.exceptions.UserDataNotFoundException;
import com.dietician.server.utilities.exceptions.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserDataConverter userDataConverter;
    private final UserDailyCaloriesConverter dailyCaloriesConverter;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final UserProductsConverter userProductsConverter;
    private final NutrientsPerDayRepository nutrientsPerDayRepository;
    private final FoodDiaryRepository foodDiaryRepository;

    public Long registerUser(User user) {
        return userRepository.save(user).getId();
    }

    public void checkFacebookUser(String facebookUserId, String email) {
        if (!userRepository.findByFacebookUserId(facebookUserId).isPresent()) {
            User facebookUser = buildFacebookUser(facebookUserId, email);
            userRepository.save(facebookUser);
        }
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public UserGoalDataResponse getUserGoalData(String username) {
        User user = getUserByUsername(username);
        UserGoalData userGoalData = user.getUserGoal();
        if (userGoalData == null) {
            return UserGoalDataResponse.builder()
                    .dataCompleted(false)
                    .build();
        } else {
            UserGoalDataResponse userGoalDataResponse = userDataConverter.convertToResponse(userGoalData);
            userGoalDataResponse.setDataCompleted(true);
            return userGoalDataResponse;
        }
    }

    public UserDailyCaloriesSumResponse getDailyCaloriesSum(String username) {
        User user = getUserByUsername(username);
        UserGoalData userGoalData = user.getUserGoal();
        if (userGoalData == null)
            throw new UserDataNotFoundException();
        if (getFoodDiaryStreamByToday(user.getId())
                .count() < 1) {
            createNewPositionInFoodDiary(user, userGoalData);
        }
        return dailyCaloriesConverter.convertToResponse(getFoodDiaryStreamByToday(user.getId())
                .max(Comparator.comparing(FoodDiary::getDate))
                .orElseThrow(FoodDiaryNotFoundException::new));
    }

    public List<ConsumptionProductResponse> getDailyFoodDiary(String username) {
        User user = getUserByUsername(username);
        UserGoalData userGoalData = user.getUserGoal();
        if (userGoalData == null)
            throw new UserDataNotFoundException();
        if (getFoodDiaryStreamByToday(user.getId()).count() < 1) {
            createNewPositionInFoodDiary(user, userGoalData);
        }
        return getFoodDiaryStreamByToday(user.getId())
                .filter(foodDiary -> foodDiary.getProduct() != null)
                .map(userProductsConverter::convertToConsumption)
                .collect(Collectors.toList());
    }

    private void createNewPositionInFoodDiary(User user, UserGoalData userGoalData) {
        FoodDiary foodDiary = FoodDiary.builder()
                .date(OffsetDateTime.now())
                .nutrientsPerDay(
                        nutrientsPerDayRepository.save(
                                NutrientsPerDay.builder()
                                        .calories(userGoalData.getCalories())
                                        .carbohydrates(userGoalData.getCarbohydrates())
                                        .fat(userGoalData.getFat())
                                        .proteins(userGoalData.getProteins())
                                        .build()
                        )
                )
                .user(user)
                .build();
        foodDiaryRepository.save(foodDiary);
    }

    private Stream<FoodDiary> getFoodDiaryStreamByToday(Long userId) {
        return foodDiaryRepository.findAll().stream()
                .filter(foodDiary -> foodDiary.getUser().getId().equals(userId))
                .filter(foodDiary -> foodDiary.getDate().getYear() == OffsetDateTime.now().getYear())
                .filter(foodDiary -> foodDiary.getDate().getMonthValue() == OffsetDateTime.now().getMonthValue())
                .filter(foodDiary -> foodDiary.getDate().getDayOfMonth() == OffsetDateTime.now().getDayOfMonth());
    }

    @Override
    public UserDetails loadUserByUsername(String s) {
        return userRepository.findByEmail(s)
                .orElseThrow(() -> new UserNotFoundException(s));
    }

    public User getUserByUsername(String username) {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new UserNotFoundException(username));
    }

    private User buildFacebookUser(String facebookUserId, String email) {
        return User.builder()
                .email(email)
                .facebookUserId(facebookUserId)
                .role(UserRole.USER)
                .blocked(false)
                .userGoal(null)
                .build();
    }

    public String getUserRole(String username) {
        return getUserByUsername(username).getRole().toString();
    }

    public Long addProductToUserDailyCalories(String username, Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId));
        NutrientsPerPortion productNutrients = product.getStandardPortionNutrients();
        User user = getUserByUsername(username);
        NutrientsPerDay lastfoodDiary = getFoodDiaryStreamByToday(user.getId())
                .max(Comparator.comparing(FoodDiary::getDate))
                .map(FoodDiary::getNutrientsPerDay)
                .orElseThrow(FoodDiaryNotFoundException::new);
        NutrientsPerDay foodDiaryPositionNutrients = NutrientsPerDay.builder()
                .calories(lastfoodDiary.getCalories() - ((productNutrients.getCalories() * quantity) / productNutrients.getPortionSize()))
                .proteins((int) (lastfoodDiary.getProteins() - ((productNutrients.getProteins() * quantity) / productNutrients.getPortionSize())))
                .fat((int) (lastfoodDiary.getFat() - ((productNutrients.getFat() * quantity) / productNutrients.getPortionSize())))
                .carbohydrates((int) (lastfoodDiary.getCarbohydrates() - ((productNutrients.getCarbohydrates() * quantity) / productNutrients.getPortionSize())))
                .build();
        nutrientsPerDayRepository.save(foodDiaryPositionNutrients);
        FoodDiary foodDiary = FoodDiary.builder()
                .user(user)
                .date(OffsetDateTime.now())
                .product(product)
                .nutrientsPerDay(foodDiaryPositionNutrients)
                .productPortion(quantity)
                .build();
        return foodDiaryRepository.save(foodDiary).getId();
    }

}
