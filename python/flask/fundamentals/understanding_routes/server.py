from flask import Flask  
app = Flask(__name__)    

#1 localhost:5000/ - have it say "Hello World!"
@app.route('/')
def hello_world():
    return 'Hello World!' 

#2 localhost:5000/dojo - have it say "Dojo!"
@app.route('/dojo')
def dojo():
    return 'Dojo!' 

#3 Create one url pattern and function that can handle the following examples: 
#  localhost:5000/say/flask - have it say "Hi Flask!"
@app.route('/say/<name>')
def say(name):
    return "Hi " + str(name) + "!"

#4 Create one url pattern and function that can handle the following examples 
#  (HINT: int() will come in handy! For example int("35") returns 35):
#  localhost:5000/repeat/35/hello - have it say "hello" 35 times
@app.route('/repeat/<number>/<name>')
def repeat(number, name):
    return (str(name)+'<br>')*int(number)

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

