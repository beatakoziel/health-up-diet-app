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