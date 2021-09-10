from flask import request, redirect, render_template
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja
from flask_app import app

@app.route("/")
def default():
    return redirect("/dojos")

@app.route("/dojos")
def index():
    dojos= Dojo.get_all()
    print(dojos)
    return render_template("index.html", dojos=dojos)

@app.route("/dojos/<dojo_id>")
def index_dojo(dojo_id):
    data = {
        "dojo_id": int(dojo_id)
    }
    dojos= Dojo.get_one(data)
    print(dojos)
    return render_template("one_dojo.html", dojo=dojos)

@app.route("/add_ninja")
def add_ninja():
    dojos= Dojo.get_all()
    return render_template("add.html", dojos=dojos)

@app.route('/create_dojo', methods=["POST"])
def create_dojo():
    data = {
        "name": request.form["name"]
    }
    Dojo.save_dojo(data)
    return redirect('/dojos')

@app.route('/create_ninja', methods=["POST"])
def create_ninja():
    data = {
        "dojo_id": request.form["dojo_id"],
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
    }
    Ninja.save_ninja(data)
    return redirect('/dojos')
