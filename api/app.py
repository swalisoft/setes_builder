from flask import Flask, request, jsonify
from Postgres import Postgres
from create_virtual_host import create_custumer, delete_custumer

from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

postgres = Postgres()

@app.route('/servers/<int:id>', methods=['DELETE'])
def deleteServer(id):
  server = postgres.fetch_one(f'SELECT "database", "user" FROM servers WHERE id = {id}')

  postgres.execute(f'DELETE FROM servers WHERE id = {id}')

  delete_custumer(server[1], server[0])

  response = jsonify("Deleted")

  return response

@app.route('/servers', methods=['GET', 'POST'])
def servers():
  if request.method == 'GET':
    user_id = request.args.get('user_id')
    servers = postgres.fetch_all(
      f'SELECT * FROM servers WHERE user_id = {user_id}',
    )
    response = jsonify(servers)

    return response
  elif request.method == 'POST':
    data = request.get_json()

    postgres.execute(
      '''
        INSERT INTO servers
          ("user", password, domain, db_user, db_password, database, user_id)
        VALUES
          (%s, %s, %s, %s, %s, %s, %s)
      ''',
      (
        data['user'],
        data['password'],
        data['domain'],
        data['db_user'],
        data['db_password'],
        data['database'],
        data['user_id']
      )
    )

    create_custumer(
      data['user'],
      data['password'],
      data['domain'],
      data['db_user'],
      data['db_password'],
      data['database']
    )

    response = jsonify({"messaage":  "succesful crated"})

    return response

@app.route('/login', methods=['POST'])
def login():
  data = request.get_json()

  user = postgres.fetch_one(
    '''
      SELECT * FROM users WHERE email = %s AND password = %s
    ''',
    (
      data['email'],
      data['password'],
    )
  )

  return jsonify(user)

@app.route('/register', methods=['POST'])
def register(): 
  data = request.get_json()

  postgres.execute(
    '''
      INSERT INTO users 
        ("name", email, password)
      VALUES
        (%s, %s, %s)
    ''',
    (
      data['name'],
      data['email'],
      data['password'],
    )
  )

  response = jsonify("User registered")

  return response

if __name__ == '__main__':
  app.run(debug=True)
