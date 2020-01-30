import functools
import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from flasknote.db import get_db

bp = Blueprint('edge', __name__, url_prefix='/edge')

@bp.route('/get_all', methods=('POST','GET'))
def get_all():
    db = get_db()
    edges = db.execute('SELECT * FROM edge WHERE user_id = ?', (0,)).fetchall()
    
    return json.dumps(edges);
