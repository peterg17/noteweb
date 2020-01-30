import functools
import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from flasknote.db import get_db

bp = Blueprint('note', __name__, url_prefix='/note')

@bp.route('/get_all', methods=('POST','GET'))
def get_all():
    db = get_db()
    notes = db.execute('SELECT * FROM note WHERE user_id = ?', (0,)).fetchall()
    
    return json.dumps([notes:"notes"]);
