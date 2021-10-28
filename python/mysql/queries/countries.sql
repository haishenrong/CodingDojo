-- SELECT * FROM world.city;
-- SELECT * FROM world.country;
-- SELECT * FROM world.countrylanguage;

-- 1. What query would you run to get all the countries that speak Slovene? 
-- Your query should return the name of the country, language and language percentage. 
-- Your query should arrange the result by language percentage in descending order. (1)
SELECT name, language, Percentage FROM countrylanguage
LEFT JOIN country
ON country.Code = countrylanguage.CountryCode
WHERE countrylanguage.Language = "Slovene"
ORDER BY Percentage DESC;

-- 2. What query would you run to display the total number of cities for each country? 
-- Your query should return the name of the country and the total number of cities. 
-- Your query should arrange the result by the number of cities in descending order. (3)

SELECT country.name, COUNT(countryCode) FROM country
LEFT JOIN city
ON country.Code = city.CountryCode
GROUP BY country.name
ORDER BY COUNT(countryCode) DESC;

-- 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000? 
-- Your query should arrange the result by population in descending order. (1)
SELECT name, population. CountryCode FROM city
WHERE CountryCode = "MEX" and population > 500000
ORDER BY population DESC;

-- 4. What query would you run to get all languages in each country with a percentage greater than 89%? 
-- Your query should arrange the result by percentage in descending order. (1)
SELECT name, language, Percentage FROM countrylanguage
LEFT JOIN countries
ON countries.Code = countrylanguage.CountryCode
WHERE countrylanguage.Percentage > 89.0
ORDER BY Percentage DESC;

-- 5. What query would you run to get all the countries with Surface Area below 501 and Population 
-- greater than 100,000? (2)
SELECT name, SurfaceArea, Population FROM country 
WHERE SurfaceArea < 501 and Population > 100000;

-- 6. What query would you run to get countries with only Constitutional Monarchy with a capital
-- greater than 200 and a life expectancy greater than 75 years? (1)
SELECT name, GovernmentForm, capital, LifeExpectancy FROM country 
WHERE GovernmentForm = "Constitutional Monarchy"  and LifeExpectancy > 75 and capital > 200;

-- 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district 
-- and have the population greater than 500, 000? The query should return the 
-- Country Name, City Name, District and Population. (2)
SELECT country.name as CountryName, city.name as CityName, district, city.population from country
LEFT JOIN city
ON country.code = city.CountryCode
WHERE city.population > 500000 and city.District = "Buenos Aires";

-- 8. What query would you run to summarize the number of countries in each region? 
-- The query should display the name of the region and the number of countries. 
-- Also, the query should arrange the result by the number of countries in descending order. (2)

SELECT Region, COUNT(Region) FROM Country
Group by Region
Order by COUNT(Region) DESC
