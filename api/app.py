from flask import Flask
import os

app = Flask(__name__)

@app.route('/servers')
def hello():
<<<<<<< HEAD:api/hello.py
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
=======
    return 'Hello Work'

if __name__ == '__main__':
    app.run()
>>>>>>> 92a6ba31e1f2be81bd6122b0aa38a72aa8c03b90:api/app.py
