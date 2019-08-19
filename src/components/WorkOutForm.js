import React from 'react';

class WorkOutForm extends React.Component {
    render() {
        return (
            <div className="container">
                <select name="workOut">
                    <option value="">Select one</option>
                    <option value="pushups">Pushups</option>
                    <option value="abs">ABS</option>
                </select>

            </div>
        );
    }
}

export default WorkOutForm;
