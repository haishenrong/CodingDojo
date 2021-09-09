from flask import Flask, request, redirect, render_template
from user import User

app = Flask(__name__)

@app.route("/")
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
    return redirect('/')
            
if __name__ == "__main__":
    app.run(debug=True)

