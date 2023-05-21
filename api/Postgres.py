import psycopg2

class Postgres:
  def __init__(self):
    conn = psycopg2.connect(
      database="aso",
      host="127.0.0.1",
      user="aso",
      password="aso",
      port="5434"
    )
    self.cursor = conn.cursor()

  def execute(self, query):
    self.cursor.modify(query)

  def fetch_all(self, query):
    self.cursor.execute(query)

    return self.cursor.fetchall()

  def fetch_one(self, query):
    self.cursor.execute(query)

    return self.cursor.fetchone()
