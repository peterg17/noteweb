export FLASK_APP=/app/flask-docker-app
export FLASK_ENV=development
flask init-db
flask run --host=0.0.0.0