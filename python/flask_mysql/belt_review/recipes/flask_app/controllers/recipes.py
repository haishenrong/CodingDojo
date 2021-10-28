from flask import request, redirect, render_template, session
from flask_app.models.recipe import Recipe
from flask_app.models.user import User
from datetime import date
from flask_app import app
from flask.helpers import flash
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)  

@app.route("/recipes/<int:id>")
def one_recipe(id):
    if 'user_id' not in session: 
        flash('Please register or login')
        return redirect('/')
    data = {
        "recipe_id": id,
        "user_id": int(session['user_id'])
    }
    recipe = Recipe.get_by_id(data)
    recipe.date_made = recipe.date_made.strftime("%b %#dth, %Y")
    recipe.instructions = recipe.instructions.replace('\n', '<br>')
    user = User.get_by_id(data)
    likes = Recipe.get_likes(data)
    return render_template("recipe.html", recipe = recipe, user = user,likes = likes)

@app.route("/recipes/new", methods = ['GET', 'POST'])
def new_recipe():
    if request.method == 'GET':
        if 'user_id' not in session: 
            flash('Please register or login')
            return render_template("index.html")
        user_id = session['user_id']
        today = date.today()
        return render_template("new_recipe.html", user_id = user_id, today = today)
    else: 
        data = {
            "name": request.form['name'],
            "description": request.form['description'],
            "instructions": request.form['instructions'],
            "under_thirty": request.form['under_thirty'],
            "date_made": request.form['date_made'],
            "user_id": int(request.form['user_id'])
        }
        if data["under_thirty"] == 'true':
            data["under_thirty"] = True
        else:
            data["under_thirty"] = False
        if Recipe.validate_form(data):
            Recipe.save_recipe(data)
            return redirect('/logged')
        return redirect('/recipes/new')

@app.route("/recipes/edit/<int:id>", methods = ['GET', 'POST'])
def edit_recipe(id):
    if request.method == 'GET':
        if 'user_id' not in session: 
            flash('Please register or login')
            return render_template("index.html")
        data = {
            "id": id
        }
        recipe = Recipe.get_by_id(data)
        return render_template("edit_recipe.html", recipe = recipe)
    else:
        data = {
            "name": request.form['name'],
            "description": request.form['description'],
            "instructions": request.form['instructions'],
            "under_thirty": request.form['under_thirty'],
            "date_made": request.form['date_made'],
            "id": id
        }
        if data["under_thirty"] == 'true':
            data["under_thirty"] = True
        else:
            data["under_thirty"] = False
        if Recipe.validate_form(data):
            Recipe.update(data)
            return redirect('/logged')
        return redirect('/recipes/edit/'+str(id))

@app.route("/recipes/like/<int:id>", methods = ['POST'])
def like(id):
    if 'user_id' not in session: 
        flash('Please register or login')
        return render_template("index.html")
    data = {
        "user_id": session['user_id'],
        "recipe_id": id
    }
    Recipe.like(data)
    return redirect('/recipes/'+str(id))


@app.route("/recipes/unlike/<int:id>", methods = ['POST'])
def unlike(id):
    if 'user_id' not in session: 
        flash('Please register or login')
        return render_template("index.html")
    data = {
        "user_id": session['user_id'],
        "recipe_id": id
    }
    Recipe.unlike(data)
    return redirect('/recipes/'+str(id))

@app.route("/recipes/delete/<int:id>")
def delete(id):
    data = {
        "id": id
    }
    Recipe.delete(data)
    return redirect("/logged")