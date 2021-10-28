-- clear all; close all; clc;\
DELETE FROM ninjas WHERE id > 0;
DELETE FROM dojos WHERE id > 0;

INSERT INTO dojos (id, name, created_at, updated_at)
VALUES (1, "Bob's Bickering Blunders", NOW(), NOW());

INSERT INTO dojos (id, name, created_at, updated_at)
VALUES (2, "Alice's Abstract Angles", NOW(), NOW());

INSERT INTO dojos (id, name, created_at, updated_at)
VALUES (3, "Charlie's Cool Campers", NOW(), NOW());

DELETE FROM dojos WHERE id = 1;
DELETE FROM dojos WHERE id = 2;
DELETE FROM dojos WHERE id = 3;

-- Forcing these to have id 1, 2, 3 for my sake
INSERT INTO dojos (id, name, created_at, updated_at)
VALUES (1, "Bob's Bickering Blunders", NOW(), NOW());

INSERT INTO dojos (id, name, created_at, updated_at)
VALUES (2, "Alice's Abstract Angles", NOW(), NOW());

INSERT INTO dojos (id, name, created_at, updated_at)
VALUES (3, "Charlie's Cool Campers", NOW(), NOW());

INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Alpha", "One", 11, NOW(), NOW(),1);
INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Beta", "Two", 12, NOW(), NOW(),1);
INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Gamma", "Three", 13, NOW(), NOW(),1);

INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Delta", "Love", 23, NOW(), NOW(),2);
INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Epsilon", "Your", 42, NOW(), NOW(),2);
INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Zeta", "Life", 34, NOW(), NOW(),2);

INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Theta", "Hiatus", 101, NOW(), NOW(),3);
INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Iota", "Pyongyang", 32, NOW(), NOW(),3);
INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id)
VALUES ("Kappa", "Haze", 12, NOW(), NOW(),3);

Select * from ninjas WHERE dojo_id = 1;
Select * from ninjas WHERE dojo_id = 3;
Select * from dojos;

SELECT name FROM dojos
LEFT JOIN ninjas
ON ninjas.dojo_id = dojos.id
ORDER BY ninjas.id DESC LIMIT 1;