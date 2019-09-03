from flask import Flask, request, abort, make_response
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello world!"

@app.route('/activities', methods=["POST"])
def create_activity():
    if not "type" in request.json or not "reps" in request.json or not "id" in request.json:
        abort(400)

    type = request.json.get("type")
    reps = request.json.get("reps")
    id = request.json.get("id")

    try:
        reps = int(reps)
        id = int(id)
    except:
        return abort(400)

@app.errorhandler(400)
def bad_request(error):
    return make_response("bad request", 400)

if __name__ == "__main__":
    app.run(debug=True)
