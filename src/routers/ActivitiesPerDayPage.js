import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Activity from '../components/Activity';

class ActivitiesPerDayPage extends React.Component {
    constructor({ location }) {
        super();
        const params = new URLSearchParams(location.search);
        let day = params.get('day')

        this.state = {
            date: day,
            activities: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/activities', {
            params: {
                day: this.state.date,
            }
        })
          .then(res => {
            const activities = res.data;
            this.setState({ activities })
        });
    }

    async removeActivity(id) {
        let response = await axios.delete('http://127.0.0.1:5000/activities/' + id);

        if (response.status === 200) {
            response = await axios.get('http://127.0.0.1:5000/activities', {
                params: {
                    day: this.state.date,
                }
            });
            const activities = response.data;
            this.setState({ activities });
        }
    }
    render() {
        return (
            <div className="card mx-auto mt-4" style={{width: 1000}}>
                <h5 className="card-header bg-info text-light text-center py-4"> 
                    <strong>ACTIVITIES OF DAY: {this.state.date}</strong>
                </h5>
                <Link
                    className="btn btn-outline-success btn-rounded btn-block z-depth-0 waves-effect"
                    to={"/activityform?day=" + this.state.date} >
                        Create new activity
                </Link>
                <div className="card-body mx-auto">
                    <div className="card-columns">
                        {this.state.activities.map(activity => {
                            return (
                                <Activity
                                    onActivityDeleted={this.removeActivity.bind(this)}
                                    key={activity.id}
                                    type={activity.type}
                                    reps={activity.reps}
                                    totalTime={activity.totalTime}
                                    weight={activity.weight}
                                    id={activity.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivitiesPerDayPage;
