import React from 'react';

class Activity extends React.Component {
    render() {
        return(
            <div className="card m-5">
                <div className="card-header">
                    Type
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Reps</li>
                    <li className="list-group-item">Time</li>
                    <li className="list-group-item">Weight</li>
                </ul>
            </div>
        );
    }
}

export default Activity;
