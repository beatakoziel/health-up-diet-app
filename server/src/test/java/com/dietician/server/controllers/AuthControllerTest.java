package com.dietician.server.controllers;

import com.dietician.server.configurations.security.jwt.JwtAuthenticationFilter;
import com.dietician.server.configurations.security.jwt.JwtUtil;
import com.dietician.server.db.entities.User;
import com.dietician.server.dtos.requests.BasicLoginRequest;
import com.dietician.server.services.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static com.dietician.server.utilities.TestBuilders.*;
import static com.dietician.server.utilities.TestConstants.*;
import static org.hamcrest.Matchers.containsString;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class AuthControllerTest {

    private MockMvc mockMvc;
    @Autowired
    private JwtUtil jwtUtil;
    @MockBean
    private UserService userService;
    @Autowired
    private WebApplicationContext context;
    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;
    @MockBean
    private AuthenticationManager authenticationManager;


    @Before
    public void setUp() {
        when(userService.loadUserByUsername(anyString())).thenReturn(buildUser());
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenReturn(getAuthentication());
        when(userService.registerUser(any(User.class))).thenReturn(1L);
        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .addFilter(jwtAuthenticationFilter)
                .build();
    }

    @Test
    public void test_shouldReturnTestMessage() throws Exception {
        this.mockMvc.perform(get("/test"))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString(TEST_MESSAGE)));
    }

    @Test
    public void register_shouldReturnOkStatus() throws Exception {
        this.mockMvc.perform(post("/signup")
                .content(asJsonString(buildRegisterRequest(USER_TEST_EMAIL)))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    @Test
    public void login_shouldReturnToken() throws Exception {
        this.mockMvc.perform(post("/login")
                .content(asJsonString(buildLoginRequest()))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.jwt").isNotEmpty())
                .andExpect(status().isOk());
    }

}
