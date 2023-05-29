import psycopg2

class Postgres:
  def __init__(self):
    self.conn = psycopg2.connect(
      database="aso",
      host="127.0.0.1",
      user="aso",
      password="aso",
      port="5432"
    )
    self.conn.autocommit = True
    
  def execute(self, query, values = ()):
    cursor = self.conn.cursor()

    cursor.execute(query, values)

    cursor.close()
    self.conn.commit()

  def fetch_all(self, query, values = ()):
    cursor = self.conn.cursor()

    cursor.execute(query, values)

    datas = cursor.fetchall()

    cursor.close()

    return datas

  def fetch_one(self, query, values = ()):
    cursor = self.conn.cursor()

    cursor.execute(query, values)

    datas = cursor.fetchone()

    cursor.close()

    return datas
