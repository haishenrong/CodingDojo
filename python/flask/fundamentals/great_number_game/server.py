from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'Smile' 


@app.route('/', methods=['GET','POST'])         
def home():
    if session.get('number') is None:
        session['number'] = random.randint(1, 100)
    if request.method == 'POST':
        if "inquire" in request.form:
            if int(request.form.get('guess')) == session['number']:
                session['display']='flex'
                session['display2']='block'
                session['color'] = 'green'
                session['message'] = str(session['number'])+' was the number!'
            elif int(request.form.get('guess')) > session['number']:
                session['display']='flex'
                session['color'] = 'red'
                session['message'] = 'Too high!'
            elif int(request.form.get('guess')) < session['number']:
                session['display']='flex'
                session['color'] = 'red'
                session['message'] = 'Too Low!'
    return render_template('index.html')

@app.route('/destroy_session', methods=['POST'])         
def clear():
    session.clear()
    return redirect('/')

if __name__=="__main__": 
    app.run(debug=True)    
