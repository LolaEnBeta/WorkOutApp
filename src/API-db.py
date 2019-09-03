from flask import Flask, request, abort, make_response
import sqlite3
from activity import Activity

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello world!"

@app.route('/activities', methods=["POST"])
def create_activity():
    if not "type" in request.json or not "reps" in request.json or not "id_act" in request.json:
        abort(400)

    type = request.json.get("type")
    reps = request.json.get("reps")
    id_act = request.json.get("id_act")
    totalTime = request.json.get("totalTime", "")
    weight = request.json.get("weight", "")

    try:
        reps = int(reps)
        id_act = int(id_act)
    except:
        return abort(400)

    activity = Activity(type, reps, id_act, totalTime, weight)

@app.errorhandler(400)
def bad_request(error):
    return make_response("bad request", 400)

if __name__ == "__main__":
    app.run(debug=True)
