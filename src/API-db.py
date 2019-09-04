from flask import Flask, request, abort, make_response, jsonify
import sqlite3
from activity import Activity
import ActivityRepository

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
    totalTime = request.json.get("totalTime", 0)
    weight = request.json.get("weight", 0)

    try:
        reps = int(reps)
        id_act = int(id_act)
    except:
        return make_response(jsonify("It is not a number"), 400)

    new_activity = Activity(type, reps, id_act, totalTime, weight)
    result = ActivityRepository.create(new_activity)

    return result

@app.errorhandler(400)
def bad_request(error):
    return make_response("bad request", 400)

if __name__ == "__main__":
    app.run(debug=True)
