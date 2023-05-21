from flask import Flask, request, jsonify
from Postgres import Postgres

from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

postgres = Postgres()

@app.route('/servers', methods=['GET', 'POST'])
def servers():
  print(users)
  # print(request.get_json())

  if request.method == 'GET':
    servers = postgres.fetch_all('SELECT * FROM servers')
    response = jsonify(servers)

    return response
  elif request.method == 'POST':
    data = request.get_json()

    postgres.execute(
      'INSERT INTO servers(name, password) VALUES(%s, %s)',
      (data['title'], data['domain'])
    )

    response = jsonify({"messaage":  "succesful crated"})

    return response

@app.route('/users')
def users():
  # guardar en la base de datao
  return 'Hello Work'

@app.route('/login', methods=['POST'])
def login():
  # guardar en la base de datao
  return 'Hello Work'

if __name__ == '__main__':
  app.run(debug=True)
