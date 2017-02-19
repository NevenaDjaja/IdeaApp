#!/bin/bash
USER="user"
PASS="pass"
HOST="localhost"
DB="ideas_dev"

mysql -u root -e "CREATE DATABASE ${DB}";
# mysql -e "CREATE USER ${USER}@${HOST}";
# mysql -e "GRANT ALL PRIVILEGES ON ${DB}.* TO '${USER}'@'localhost';"
# mysql -e "FLUSH PRIVILEGES;"
