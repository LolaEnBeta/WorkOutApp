from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello world!"

@app.route('/activities', methods=["POST"])
def create_activity():
    return

if __name__ == "__main__":
    app.run(debug=True)
