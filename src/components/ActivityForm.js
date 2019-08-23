import React from 'react';

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

        if (typeInput.value === "" || repsInput.value === "") {
            alert("You need to specify the activity and reps!");
        } else {
            let counterId = this.state.counterId + 1

            this.setState({
                counterId: counterId,
            })

            let newActivity = {
                type: typeInput.value,
                reps: repsInput.value,
                totalTime: totalTimeInput.value,
                weight: weightInput.value,
                id: this.state.counterId,
            }

            typeInput.value = "";
            repsInput.value = "";
            totalTimeInput.value = "";
            weightInput.value = "";

            this.props.onActivityCreated(newActivity);
        }
    }
}

export default ActivityForm;
