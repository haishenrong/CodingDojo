INSERT INTO users_schema.users (first_name, last_name, email, created_at, updated_at)
VALUES ("Bob", "Terwilliger", "terwilligerb@thekrustyshow.com", NOW(), NOW());

INSERT INTO users_schema.users (first_name, last_name, email, created_at, updated_at)
VALUES ("Phillip", "Fry", "fryp@planetexpr.com", NOW(), NOW());

INSERT INTO users_schema.users (first_name, last_name, email, created_at, updated_at)
VALUES ("Charlie", "Brown", "goodgrief@gmail.com", NOW(), NOW());

SELECT * FROM users_schema.users;

SELECT * FROM users_schema.users WHERE email = "terwilligerb@thekrustyshow.com";

SELECT * FROM users_schema.users WHERE id = 3;

UPDATE users_schema.users
SET last_name = "Pancakes"
WHERE id = 3;

DELETE FROM users_schema.users WHERE id = 2;

SELECT * FROM users_schema.users 
order by first_name;

SELECT * FROM users_schema.users 
order by first_name DESC;