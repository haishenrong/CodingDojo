from datetime import datetime
from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'With Rainy Eyes' 



@app.route('/')         
def home():
    if 'gold' not in session:
        session['gold']=0
    if 'log' not in session:
        session['log']="<p style='margin:0; color:gold;'> Welcome to Ninja Gold!</p>"
    return render_template('index.html', gold = session['gold'], log = session['log'])

@app.route('/process_money', methods=['POST'])         
def filledForm():
    date = datetime.now()
    if 'farm' in request.form:
        earnings = random.randint(10, 20)
        session['gold'] += earnings
        session['log'] = "<p style='margin:0; color:green;'> Earned "+str(earnings)+" gold from farming. "+date.strftime("%r, %d/%m/%y")+"</p>" + session['log']
    if 'cave' in request.form:
        earnings = random.randint(0, 30)
        session['gold'] += earnings
        session['log'] = "<p style='margin:0; color:green;'> Earned "+str(earnings)+" gold from spelunking. "+date.strftime("%r, %d/%m/%y")+"</p>" + session['log']
    if 'house' in request.form:
        earnings = random.randint(2, 5)
        session['gold'] += earnings
        session['log'] = "<p style='margin:0; color:green;'> Earned "+str(earnings)+" gold from spring cleaning. "+date.strftime("%r, %d/%m/%y")+"</p>" + session['log']
    if 'casino' in request.form:
        earnings = random.randint(-50, 50)
        session['gold'] += earnings
        if earnings >= 0:
            session['log'] = "<p style='margin:0; color:green;'> Earned "+str(earnings)+" gold from gambling. "+date.strftime("%r, %d/%m/%y")+"</p>" + session['log']
        else:
            session['log'] = "<p style='margin:0; color:red;'> Lost "+str(earnings)+" gold from gambling. "+date.strftime("%r, %d/%m/%y")+"</p>" + session['log']
    return redirect('/')

@app.route('/reset', methods=['POST'])         
def reset():
    session.clear()
    return redirect('/')
if __name__=="__main__": 
    app.run(debug=True)    
