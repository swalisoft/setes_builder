from flask import Flask, request, jsonify
from Postgres import Postgres

app = Flask(__name__)

postgres = Postgres()

@app.route('/servers', methods=['GET', 'POST'])
def servers():
  users = postgres.execute('SELECT * FROM users')
  print(users)
  # print(request.get_json())

  if request.method == 'GET':
    response = jsonify({"order_id": 123, "status": "shipped"})

    return response
  elif request.method == 'POST':
    return 'Hello Work POST'

@app.route('/users')
def users():
  # guardar en la base de datao
  return 'Hello Work'

@app.route('/login')
def login():
  # guardar en la base de datao
  return 'Hello Work'

if __name__ == '__main__':
  app.run(debug=True)
