import functools
import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)

from flasknote.db import get_db

bp = Blueprint('note', __name__, url_prefix='/note')

labels = ["id", "user_id", "created", "title", "content"]

@bp.route('/get_all', methods=('POST','GET'))
def get_all():
    db = get_db()
    notes = []
    note_rows = db.execute('SELECT * FROM note WHERE user_id = ?', (0,)).fetchall()
    for row in note_rows:
        note_dict = {}
        for row_ind in range(len(row)):
            note_dict[labels[row_ind]] = row[row_ind]
        notes.append(note_dict)
    return jsonify({'data':notes});
