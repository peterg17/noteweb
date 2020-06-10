import functools
import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)

from flasknote.db import get_db

bp = Blueprint('edge', __name__, url_prefix='/edge')

labels = ["id", "user_id", "created", "from", "to"]

@bp.route('/get_all', methods=('POST','GET'))
def get_all():
    db = get_db()
    edges = []
    edge_rows = db.execute('SELECT * FROM edge WHERE user_id = ?', (0,)).fetchall()
    for row in edge_rows:
        edge_dict = {}
        for row_ind in range(len(row)):
            edge_dict[labels[row_ind]] = row[row_ind]
        edges.append(edge_dict)
    resp = jsonify({"data":edges})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
