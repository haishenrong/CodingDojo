from flask import request, redirect, render_template
from flask_app.models.user import User
from flask_app import app

@app.route("/")
def default():
    return redirect("/users")

@app.route("/users")
def index():
    users = User.get_all()
    print(users)
    return render_template("index.html", users=users)

@app.route("/add_user")
def add_user():
    return render_template("add.html")

@app.route('/create_user', methods=["POST"])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    User.save_user(data)
    return redirect('/users')

@app.route('/show/<id>')
def one_user(id):
    data = {
        "id": int(id)
    }
    user = User.get_one(data)
    return render_template("one_user.html", user=user[0])

@app.route('/edit/<id>')
def edit_user(id):
    data = {
        "id": int(id)
    }
    user = User.get_one(data)
    return render_template("edit_user.html", user=user[0])

@app.route('/update_user/<id>', methods=["POST"])
def update_user(id):
    data = {
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"],
        "id": int(id)
    }
    User.update_user(data)
    return redirect('/users')

@app.route('/delete/<id>')
def delete(id):
    data = {
        "id": int(id)
    }
    user = User.delete(data)
    return redirect("/users")