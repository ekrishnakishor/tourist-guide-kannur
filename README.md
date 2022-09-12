# Arround The World

```
Arround The Wolrd project with a frontend built in React & Redux and a backend built in Django API.
This peoject is a mini travel web application where you can explore the different places 
all over the world and you can check the directions and you can keep a list of your favorite places.
You can also find the time and type of trip to visit a particular place.
```

## Live Demo

**This App uses a Heroku free plan, so I am afraid that it takes time to load the pages.**

Check out [FRONTEND LIVE DEMO](https://around-the-world-frontend1.herokuapp.com/) here!!
Check out [BACKEND LIVE DEMO](https://around-the-world-backend2.herokuapp.com/) here!!


## Tech used

```
* Frontend : React & Redux
* Backend : Django
```

## How to Install

1. Git Clone

```
git clone https://github.com/bikila2019/Around_The_World.git
```

2. Backend setting

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/posts/

# To have dummy data for testing run:
python manage.py fixtures/dummy-data.json
```

3. Frontend setting

```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```
