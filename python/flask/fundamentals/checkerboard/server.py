from flask import Flask, render_template 
app = Flask(__name__)

@app.route('/')         
def home():
    return render_template('index.html')

@app.route('/<x>')
def boardX(x):
    return render_template('index.html', x=int(x))

@app.route('/<x>/<y>')
def boardXY(x,y):
    return render_template('index.html', x=int(x), y=int(y))

@app.route('/<x>/<y>/<color1>/<color2>')
def boardXYC(x,y, color1, color2):
    return render_template('index.html', x=int(x), y=int(y), color1=str(color1), color2=str(color2))

if __name__=="__main__": 
    app.run(debug=True)    

