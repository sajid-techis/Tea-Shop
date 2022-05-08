# Tea-Shop App

```
This is a Mini E-Commerce project with a frontend built in React & Redux and a backend built in Django API.
Customers can login and order their favourite tea from the app
```

## Live Demo

**This App uses a Heroku free plan, so I am afraid that it takes time to load the pages.**

Check out [FRONTEND LIVE DEMO](https://teashop-frontend.herokuapp.com/) here!!

Check out [API LIVE DEMO](https://teashop1-backend.herokuapp.com) here!!
<img width="1436" alt="Screen Shot 2022-01-06 at 1 57 44 PM" src="https://user-images.githubusercontent.com/94192905/148436316-917a4f9f-aa16-4d9a-9ccd-bb12b5893529.png">
<img width="1430" alt="Screen Shot 2022-01-06 at 1 58 43 PM" src="https://user-images.githubusercontent.com/94192905/148436439-93e4a953-2977-4a39-b774-210b88ad1e5b.png">




## Tech used

```
* Frontend : React & Redux
* Backend : Django
```

## How to Install

1. Git Clone

```
git clone https://github.com/Zubair2002/Tea-Shop.git
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
