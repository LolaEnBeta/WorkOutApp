import React from 'react';
import axios from 'axios';

class ActivityForm extends React.Component {
    constructor() {
        super();
        this.state = {
            counterId: 0,
        }
    }
    render() {
        return (
            <div className="container mt-4 ml-5" style={{width: 350}}>
                <div className="list-group-item">
                    <label>Which activity did you do?</label>
                    <div>
                        <select name="type" id="type">
                            <option value="">Select one</option>
                            <option value="Pushups">Pushups</option>
                            <option value="ABS">ABS</option>
                        </select>
                    </div>
                </div>

                <div className="list-group-item">
                    <label className="card-title mt-4">How many repetitions did you do?</label>

                    <div>
                        <input type="text" name="reps" id="reps" />
                    </div>
                </div>

                <div className="list-group-item">
                    <label className="mt-4">How many time did you work out?</label>

                    <div>
                        <input type="text" name="totalTime" id="totalTime" />
                    </div>
                </div>

                <div className="list-group-item">
                    <label className="mt-4">How many weight did you use?</label>

                    <div>
                        <input type="text" name="weight" id="weight" />
                    </div>
                </div>

                <button
                    className="mt-4 btn btn-primary"
                    onClick={this.saveActivity.bind(this)}>
                    Save
                </button>
            </div>
        );
    }
    saveActivity() {

        const typeInput = document.getElementById("type");
        const repsInput = document.getElementById("reps");
        const totalTimeInput = document.getElementById("totalTime");
        const weightInput = document.getElementById("weight");

        let newActivity = {
            type: typeInput.value,
            reps: repsInput.value,
            totalTime: totalTimeInput.value || 0,
            weight: weightInput.value || 0,
            id: this.state.counterId,
        }

        axios({
            method: 'POST',
            header: "Content-Type: application/json",
            url: 'http://127.0.0.1:5000/activities',
            data: {
              "type": newActivity.type,
              "reps": newActivity.reps,
              "totalTime": newActivity.totalTime,
              "weight": newActivity.weight
            }
        })

        typeInput.value = "";
        repsInput.value = "";
        totalTimeInput.value = "";
        weightInput.value = "";

        // this.props.onActivityCreated.bind(this);
    }
}

export default ActivityForm;
