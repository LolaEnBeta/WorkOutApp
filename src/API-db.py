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

@app.route('/activities', methods=["GET"])
def get_all():
    activity_list = ActivityRepository.get_all()
    activities = [activity.to_json() for activity in activity_list]

    return jsonify(activities)

@app.route('/activities/<id>', methods=["GET"])
def get_by(id):
    activity = ActivityRepository.get_by(id)
    if not activity:
        abort(404)

    return jsonify(activity.to_json())

@app.errorhandler(400)
def bad_request(error):
    return make_response("bad request", 400)

@app.errorhandler(404)
def not_found(error):
    return make_response("not found", 404)

if __name__ == "__main__":
    app.run(debug=True)
