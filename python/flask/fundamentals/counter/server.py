from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'A Himitsu' 

@app.route('/', methods=['GET','POST'])         
def home():
    if request.method == 'GET':
        if 'counter' not in session:
            session['counter'] = 1
        else:
            session['counter'] += 1
    elif request.method == 'POST':
        if "increment" in request.form:
            session['counter'] += 2 if 'increment'not in session else session['increment'] 
        elif "reset" in request.form:
            session['counter'] = 0
        elif "change" in request.form:
            session['increment'] = int(request.form['incrementVal'])
    return render_template('index.html', counter = session['counter'])

@app.route('/destroy_session')         
def clear():
    session.clear()
    return redirect('/')

if __name__=="__main__": 
    app.run(debug=True)    
