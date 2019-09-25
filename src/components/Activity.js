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
            <div className="card m-4 text-center" style={{width: 225}}>
                <div className="card-header text-white bg-primary">
                    <strong>{this.props.type}</strong>
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

                    <div className=" align-items-start">
                            <button
                                className="btn btn-outline-danger btn-rounded btn-block z-depth-0 waves-effect"
                                onClick={this.deleteActivity.bind(this)}>
                                Delete
                            </button>
                            <button
                                className="btn btn-outline-warning btn-rounded btn-block z-depth-0 waves-effect">
                                <Link
                                    className="text-warning"
                                    to={"/modifyform?id=" + this.state.id + "&type=" + this.props.type + "&reps=" + this.props.reps + "&totalTime=" + this.props.totalTime + "&weight=" + this.props.weight}
                                    >
                                    Modify
                                </Link>
                            </button>
                    </div>
            </div>
        );
    }
}

export default Activity;
