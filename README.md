# Music-Streaming Application done using Django, React and Postgresql
This is a music streaming app
The frontend is done using React and Backend using Django

To run this Project first install requirements

```sh
pip install - r requirments.txt
```

For this project I have used Postgress Backend

you should have installed all the requirements

Now makemigrations and migrate
```sh
python manage.py makemigrations
```
```sh
python manage.py migrations
```

Now start your project

```sh
python manage.py runserver
```

Now to get frontend working cd into frontend directory by typing
```sh
cd frontend
```
install npm dependencies by typing
```sh
npm install --force
```
and type npm start to start your frontend

```sh
npm start
```
This App allows you to add,delete and modify music files and 
  
All music files and images files are stored at frontend/public/songs directory


Key Features  --------

For this project I used JWT TOKEN Based Authentication using package for JWT authentication i.e djangorestframework-simplejwt which provides some features as well as a pluggable token blacklist app.