import os
from Postgres import Postgres

## add user to sudo group
# sudo usermod -aG wheel Patilla
# sudo visudo  #uncomment `%wheel ALL=(ALL) NOPASSWD: ALL`
 
def create_virtualhost(host, nombre):
  with open('assets/vhost_template.conf', 'r') as f:
    data = f.read()
    data.replace("$username$", nombre)
    data.replace("$domain$", host)

#create_virtualhost("mita@gmail.com","mita")
def create_server_user(passwds,users):
  os.system(f"sudo useradd -m {users} ")
  os.system(f"sudo echo -e -n '{passwds}\n{passwds}' | passwd {users}")
create_server_user("34353435","joel")


def create_database(user,passwd,database):
  postgres.execute(f'CREATE USER {user} WITH ENCRYPTED PASSWORD {passwd}')
  postgres.execute(f'GRANT ALL PRIVILEGES ON DATABASE {database} TO {user}') 
  