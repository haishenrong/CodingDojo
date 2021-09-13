from flask.helpers import flash
from mysqlconnection import connectToMySQL

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojo_survey_schema').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append( cls(dojo) )
        return dojos

    @classmethod
    def save_dojo(cls, data):
        print(data)
        query = "INSERT INTO dojos ( name, location, language, comment, created_at, updated_at ) VALUES ( %(name)s ,%(location)s ,%(language)s ,%(comment)s , NOW() , NOW() );"
        return connectToMySQL('dojo_survey_schema').query_db( query, data )
    

    @staticmethod
    def validate_form(data):
        is_valid = True # we assume this is true
        print(data)
        if len(data['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(data['comment'].strip()) < 1:
            flash("Comment must be at least 1 character.")
            is_valid = False
        return is_valid
    # come undone
