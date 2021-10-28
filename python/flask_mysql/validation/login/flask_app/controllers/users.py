from flask import request, redirect, render_template, session
from flask_app.models.user import User
from flask_app import app
from flask.helpers import flash
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)  

@app.route("/")
def default():
    if session.get("user_id") == None: 
        return render_template("index.html")
    return redirect('/logged')


@app.route("/create_user", methods=["POST"])
def create_user():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": request.form['password'],
        "cPassword": request.form['cPassword']
    }
    if User.validate_form(data):
        data['password'] = bcrypt.generate_password_hash(request.form['password'])
        user_id = User.save_user(data)
        session['user_id'] = user_id
        return redirect('/logged')
    return redirect('/')


@app.route('/login', methods=["POST"])
def login():
    data = {
        "email": request.form['email']
    }
    loggedUser = User.get_one_email(data)
    validation_data =  {
        "loggedUser":loggedUser,
        "password":request.form['password'] 
    }
    if not User.validate_login(validation_data):
        return redirect("/")

    session['user_id'] = loggedUser.id
    return redirect('/logged')

@app.route('/logged')
def logged():
    data = {
        "id": session['user_id']
    }
    loggedUser = User.get_one_id(data)
    return  render_template("one_user.html", user = loggedUser)

@app.route('/logout', methods = ['POST'])
def logout():
    session.clear()
    return redirect('/')