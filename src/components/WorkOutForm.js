import React from 'react';

class WorkoutForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <select name="workout">
                        <option value="">Select one</option>
                        <option value="pushups">Pushups</option>
                        <option value="abs">ABS</option>
                    </select>
                </div>

                <label htmlFor="reps">How many repetitions did you do?</label>

                <div>
                    <input type="text" name="reps" />
                </div>

                <label htmlFor="totalTime">How many time did you working out?</label>

                <div>
                    <input type="text" name="totalTime" />
                </div>

                <label htmlFor="weight">How many weight did you use?</label>

                <div>
                    <input type="text" name="weight" />
                </div>
            </div>
        );
    }
}

export default WorkoutForm;
