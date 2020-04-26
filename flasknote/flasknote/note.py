import functools
import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify, make_response, Response
)

from flasknote.db import get_db

bp = Blueprint('note', __name__, url_prefix='/note')

note_labels = ["id", "user_id", "created", "label", "content"]

edge_labels = ["id", "user_id", "created", "from", "to"]

@bp.route('/get_all', methods=('POST','GET'))
def get_all():
    db = get_db()
    notes = []
    note_rows = db.execute('SELECT * FROM note WHERE user_id = ?', (0,)).fetchall()
    for row in note_rows:
        note_dict = {}
        for row_ind in range(len(row)):
            note_dict[note_labels[row_ind]] = row[row_ind]
        notes.append(note_dict)
    edges = []
    edge_rows = db.execute('SELECT * FROM edge WHERE user_id = ?', (0,)).fetchall()
    for row in edge_rows:
        edge_dict = {}
        for row_ind in range(len(row)):
            edge_dict[edge_labels[row_ind]] = row[row_ind]
        edges.append(edge_dict)
    resp = jsonify({"nodes":notes, "edges": edges})
    print(resp)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp;
