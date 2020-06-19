
drop table recipe;
create table recipe
(
    id          bigint auto_increment
        primary key,
    description varchar(1000) not null,
    image_url varchar(255) not null,
    name        varchar(255) not null
)
    engine = MyISAM;
--INIT USER--
replace into health_up_user(id, blocked, email, password, role)
values (1, false, 'admin@admin.com', '$2y$12$b5LIwLw1C39dptntq1atSu/A2YhCXYWxiPLou/yT5DgKtVaYji3TG', 'ADMIN');

--INIT PRODUCTS--
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

--INIT RECIPES--
replace into product_quantities_in_recipe(id, product_name, quantity)
values (1, 'makaron tagliatelle', 300);
replace into product_quantities_in_recipe(id, product_name, quantity)
values (2, 'pierś z kurczaka', 200);
replace into product_quantities_in_recipe(id, product_name, quantity)
values (3, 'szpinak mrożony', 50);
replace into product_quantities_in_recipe(id, product_name, quantity)
values (4, 'serek śmietabkowy almette', 100);
replace into product_quantities_in_recipe(id, product_name, quantity)
values (5, 'oliwa z oliwek', 10);

replace into recipe(id, image_url, description, name)
values(1, 'makaron_kurczak_szpinak.png','Wstaw wodę na makaron. Posól ją. W momencie kiedy woda się zagotuje wstaw makaron i gotuj przez około 10 minut. Przysmaż kurczaka na oliwie z oliwek wraz z przyprawami. Kiedy kurczak już będzie gotowy dodaj Almette oraz 1/4 szklanki wody. Dodaj kostki zamrożonego szpinaku. Całość wymieszaj do rozpuszczenia kostek szpinaku. Smacznego!', 'Kurczak w sosie szpinakowo-śmietanowym');

replace into recipe_product_quantity_list(recipe_id, product_quantity_list_id)
values(1, 1);
replace into recipe_product_quantity_list(recipe_id, product_quantity_list_id)
values(1, 2);
replace into recipe_product_quantity_list(recipe_id, product_quantity_list_id)
values(1, 3);
replace into recipe_product_quantity_list(recipe_id, product_quantity_list_id)
values(1, 4);
replace into recipe_product_quantity_list(recipe_id, product_quantity_list_id)
values(1, 5);