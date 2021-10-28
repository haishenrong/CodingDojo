from flask_app.config.mysqlconnection import connectToMySQL
from flask.helpers import flash
import datetime

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under_thirty = data['under_thirty']
        self.date_made = data['date_made']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL('recipes_schema').query_db(query)
        recipes = []
        for recipe in results:
            recipes.append( cls(recipe) )
        return recipes

    @classmethod
    def save_recipe(cls, data):
        query = "INSERT INTO recipes ( name, description, instructions, under_thirty, date_made, created_at, updated_at, user_id ) VALUES ( %(name)s , %(description)s , %(instructions)s , %(under_thirty)s ,%(date_made)s , NOW() , NOW(), %(user_id)s );"
        insertResult = connectToMySQL('recipes_schema').query_db( query, data )
        print(insertResult)
        return insertResult

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(recipe_id)s;"
        result = connectToMySQL('recipes_schema').query_db( query, data )
        return cls(result[0])

    @classmethod
    def update(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, under_thirty = %(under_thirty)s, date_made = %(date_made)s, updated_at = NOW() ,WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db( query, data )
    
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db( query, data )

    @classmethod
    def get_all_likes(cls):
        query = "SELECT COUNT(user_id) FROM likes GROUP BY recipe_id;"
        results = connectToMySQL('recipes_schema').query_db( query)
        likes = []
        for value in results:
            likes.append(value['COUNT(user_id)'])
        return likes

    @classmethod
    def get_likes(cls, data):
        query = "SELECT COUNT(user_id) FROM likes WHERE recipe_id = %(recipe_id)s;"
        results = connectToMySQL('recipes_schema').query_db( query, data )
        query2 = "SELECT * from likes WHERE user_id = %(user_id)s AND recipe_id = %(recipe_id)s;"
        results2 = connectToMySQL('recipes_schema').query_db( query2, data)
        together = []
        together.append(results[0]['COUNT(user_id)'])
        print(results2)
        together.append(len(results2))
        return together
    
    @classmethod
    def like(cls, data):
        query = "INSERT INTO likes (recipe_id, user_id) VALUES (%(recipe_id)s, %(user_id)s);"
        return connectToMySQL('recipes_schema').query_db( query, data )
    
    @classmethod
    def unlike(cls, data):
        query = "DELETE FROM likes WHERE recipe_id = %(recipe_id)s AND user_id = %(user_id)s;"
        return connectToMySQL('recipes_schema').query_db( query, data )

    @staticmethod
    def validate_form(data):
        is_valid = True 
        if len(data['name']) < 3:
            flash("Name must be at least 3 letters.")
            is_valid = False
        if len(data['description']) < 3:
            flash("Description must be at least 3 letters.")
            is_valid = False
        if len(data['instructions']) < 3:
            flash("Instructions must be at least 3 letters.")
            is_valid = False
        return is_valid
    
    # come undone


    
