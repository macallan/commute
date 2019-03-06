# Setup local dev

1. Create mysql database
   1. log in as root to mysql: `mysql -u root`
   2. Create database: `CREATE DATABASE commute;`
   3. Create a new user and grant all privledges to commute db: `GRANT ALL PRIVILEGES ON commute.* TO 'commute_user'@'localhost' IDENTIFIED BY 'greenbean';`
   4. Flush mysql privileges: `FLUSH PRIVILEGES;`


# Deploying to heroku

pretty simple: `git subtree push --prefix server heroku master`