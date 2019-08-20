import React from 'react';

class ActivityForm extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <label>Which activity did you do?</label>
                <div>
                    <select name="activity">
                        <option value="">Select one</option>
                        <option value="pushups">Pushups</option>
                        <option value="abs">ABS</option>
                    </select>
                </div>

                <label className="mt-4">How many repetitions did you do?</label>

                <div>
                    <input type="text" name="reps" />
                </div>

                <label className="mt-4">How many time did you work out?</label>

                <div>
                    <input type="text" name="totalTime" />
                </div>

                <label className="mt-4">How many weight did you use?</label>

                <div>
                    <input type="text" name="weight" />
                </div>
            </div>
        );
    }
}

export default ActivityForm;
