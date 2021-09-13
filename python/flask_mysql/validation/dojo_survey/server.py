from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
from dojo import Dojo
app.secret_key = 'With Rainy Eyes' 


@app.route('/')         
def home():
    return render_template('index.html')

@app.route('/result', methods=['POST'])         
def filledForm():
    data = {
        "name": request.form['name'],
        "location": request.form['location'],
        "language": request.form['language'],
        "comment": request.form['comment']
    }
    if not Dojo.validate_form(data):
        return redirect('/')

    Dojo.save_dojo(data)
    return render_template('filled_form.html', 
        name=request.form['name'], 
        location = request.form['location'],
        language = request.form['language'],
        comment = request.form['comment'])
        
if __name__=="__main__": 
    app.run(debug=True)    
