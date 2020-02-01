export FLASK_APP=/app/flasknote
export FLASK_ENV=development
flask init-db
ls
python insert_test_data.py static/data/star_wars.json
flask run --host=0.0.0.0
