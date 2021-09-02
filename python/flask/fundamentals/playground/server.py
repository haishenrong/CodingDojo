from flask import Flask, render_template 
app = Flask(__name__)

@app.route('/')         
def home():
    return 'Home'  

@app.route('/play')
def play():
    return render_template('index.html')

@app.route('/play/<boxes>')
def play1(boxes):
    return render_template('index.html', boxes=int(boxes))

@app.route('/play/<boxes>/<color>')
def play2(boxes, color):
    return render_template('index.html', boxes=int(boxes), color = str(color))

if __name__=="__main__": 
    app.run(debug=True)    
