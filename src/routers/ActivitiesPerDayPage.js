import React from 'react';
import Activity from '../components/Activity';
import axios from 'axios';

class ActivitiesPerDayPage extends React.Component {
    constructor({ match, location }) {
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
        return (
            <div className="container">
                <div> DAY: {this.state.date} </div>
                <button
                    className="btn btn-secondary mr-3 mt-4">
                    Create new activity
                </button>
                <div className="card-columns">
                    {this.state.activities.map(activity => {
                        return (
                            <Activity
                                // onActivityDeleted={removeActivity.bind(this)}
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
