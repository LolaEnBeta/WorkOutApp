import React from 'react';
import { Link } from "react-router-dom";

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
        }
    }

    deleteActivity() {
        let activityId = this.props.id;
        this.props.onActivityDeleted(activityId);
    }

    render() {
        return(
            <div className="card m-5" style={{width: 250}}>
                <div className="card-header">
                    {this.props.type}
                </div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Reps:
                        <span className="badge badge-primary badge-pill">{this.props.reps}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Total time:
                        <span className="badge badge-primary badge-pill">{this.props.totalTime}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Weight:
                        <span className="badge badge-primary badge-pill">{this.props.weight}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Id:
                        <span className="badge badge-primary badge-pill">{this.props.id}</span>
                    </li>
                </ul>
                <button
                    className="btn btn-danger"
                    onClick={this.deleteActivity.bind(this)}>
                    Delete
                </button>
                <button
                    className="btn btn-danger">
                    <Link
                        to={"/modifyform?id=" + this.state.id + "&type=" + this.props.type + "&reps=" + this.props.reps + "&totalTime=" + this.props.totalTime + "&weight=" + this.props.weight}
                        >
                        Modify
                    </Link>
                </button>
            </div>
        );
    }
}

export default Activity;
