from flask import Flask
import os

app = Flask(__name__)

@app.route('/servers')
def hello():
    os.system('useradd nombe ')
 
    # guardar en la base de datao
    return 'Hello Work'

@app.route('/listar')
def hello():
    # guardar en la base de datao
    return 'Hello Work'

@app.route('/usuarios')
def hello():
    # guardar en la base de datao
    return 'Hello Work'

@app.route('/login')
def hello():
    # guardar en la base de datao
    return 'Hello Work'
