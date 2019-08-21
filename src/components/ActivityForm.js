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
            <div className="container mt-4">
                <label>Which activity did you do?</label>
                <div>
                    <select name="type" id="type">
                        <option value="">Select one</option>
                        <option value="Pushups">Pushups</option>
                        <option value="ABS">ABS</option>
                    </select>
                </div>

                <label className="mt-4">How many repetitions did you do?</label>

                <div>
                    <input type="text" name="reps" id="reps" />
                </div>

                <label className="mt-4">How many time did you work out?</label>

                <div>
                    <input type="text" name="totalTime" id="totalTime" />
                </div>

                <label className="mt-4">How many weight did you use?</label>

                <div>
                    <input type="text" name="weight" id="weight" />
                </div>
                <button
                    className="mt-4"
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

        this.props.onActivityCreated(newActivity);
    }
}

export default ActivityForm;
