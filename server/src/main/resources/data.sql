replace into health_up_user(id, blocked, email, password, role)
values (1, false, 'admin@admin.com', '$2y$12$b5LIwLw1C39dptntq1atSu/A2YhCXYWxiPLou/yT5DgKtVaYji3TG', 'ADMIN');
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (1, 98, 0, 1.3, 100, 21.5, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (1, 'MEAT', 'Pierś z kurczaka', 1);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (2, 357, 79, 0.9, 100, 7.9, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (2, 'GRAIN_PRODUCTS', 'Ryż biały Sonko', 2);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (3, 51, 4.9, 2, 100, 3.3, 'MILLILITERS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (3, 'DAIRY', 'Mleko 2%', 3);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (4, 97, 2, 5, 100, 11, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (4, 'DAIRY', 'Serek wiejski Piątnica', 4);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (5, 390, 81, 3.2, 100, 8, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (5, 'GRAIN_PRODUCTS', 'Wafel ryżowy', 5);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (6, 882, 0.2, 99.6, 100, 0, 'MILLILITERS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (6, 'OILS_AND_FATS', 'Oliwa z oliwek', 6);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (7, 258, 51.6, 1.4, 100, 9.3, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (7, 'BREAD', 'Chleb pszenny', 7);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (8, 253, 0.9, 20.3, 100, 17.1, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (8, 'MEAT', 'Szynka wieprzowa', 8);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (9, 366, 69.3, 7.2, 100, 11.19, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (9, 'GRAIN_PRODUCTS', 'Płatki owsiane górskie', 9);
replace into nutrients_per_portion(id, calories, carbohydrates, fat, portion_size, proteins, unit)
values (10, 60, 6.2, 2, 100, 4.3, 'GRAMS');
replace into product(id, category, name, standard_portion_nutrients_id)
values (10, 'GRAIN_PRODUCTS', 'Jogurt naturalny', 10);