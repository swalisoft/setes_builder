import os
from Postgres import Postgres
import psycopg2
postgres = Postgres()

## add user to sudo group
# sudo usermod -aG wheel Patilla
# sudo visudo  #uncomment `%wheel ALL=(ALL) NOPASSWD: ALL`
 
def create_virtualhost(host, user):
  with open('assets/vhost_template.conf', 'r') as f:
    data = f.read()
    data = data.replace("$username$", user)
    data = data.replace("$domain$", host)
  
  with open(f'/etc/apache2/vhosts.d/{host}.conf', 'w') as f:
    f.write(data)
  os.system(f"echo '127.0.0.1       {host}'>> /etc/hosts")
  os.system(f"")
  # os.system(f"sudo useradd -m {users} ") // reinicial apache
    
#create_virtualhost("mita@gmail.com","mita")
def create_server_user(passwds,users):
  os.system(f"sudo useradd -m {users} ")
  os.system(f"sudo echo -e -n '{passwds}\n{passwds}' | passwd {users}")
# create_server_user("34353435","joel")


def create_database(user,passwd,database):
  postgres.execute(f'create database {database}')
  postgres.execute(f"CREATE USER {user} WITH ENCRYPTED PASSWORD '{passwd}'")
  postgres.execute(f'GRANT ALL PRIVILEGES ON DATABASE {database} TO {user}')
  postgres.execute(f'GRANT ALL ON schema public TO {user}')


def create_custumer(user, password, host, dbUser, dbPassword, database):
  create_server_user(password,user)
  create_virtualhost(host,user)
  create_database(dbUser,dbPassword,database)

  


create_custumer('Ana', '1234', 'www.dolores.es', 'Ana', '5432', 'taller_Ana')
