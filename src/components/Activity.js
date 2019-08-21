import React from 'react';

class Activity extends React.Component {
    render() {
        return(
            <div className="card m-5">
                <div className="card-header">
                    {this.props.type}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Reps: {this.props.reps}</li>
                    <li className="list-group-item">Total time: {this.props.totalTime}</li>
                    <li className="list-group-item">Weight: {this.props.weight}</li>
                    <li className="list-group-item">Id: {this.props.id}</li>
                </ul>
                <button onClick={this.deleteActivity.bind(this)}>
                    Delete
                </button>
            </div>
        );
    }
    deleteActivity() {
        let activityId = this.props.id;
        this.props.onActivityDeleted(activityId);
    }
}

export default Activity;
