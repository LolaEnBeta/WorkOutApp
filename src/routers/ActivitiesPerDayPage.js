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

    render() {

        async function removeActivity(id) {
            let response = await axios ({
                method: 'DELETE',
                header: "Content-Type: application/json",
                url: 'http://127.0.0.1:5000/activities/' + id,
            });
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

        return (
            <div className="container">
                <div> DAY: {this.state.date} </div>
                <Link
                    className="btn btn-secondary mr-3"
                    to={"/activityform?day=" + this.state.date} >
                        Create new activity
                </Link>
                <div className="card-columns">
                    {this.state.activities.map(activity => {
                        return (
                            <Activity
                                onActivityDeleted={removeActivity.bind(this)}
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
        );
    }
}

export default ActivitiesPerDayPage;
