import React from 'react';
import Activity from '../components/Activity';
import axios from 'axios';

const demoData = {
    "2019/09/12": [
        {
            "type": "abs",
            "reps": 2,
            "totalTime": 10,
            "weight": 0,
            "id": 1
        },
        {
            "type": "salt",
            "reps": 200,
            "totalTime": 50,
            "weight": 0,
            "id": 2
        }
    ],
    "2019/08/26": [
        {
            "type": "abs",
            "reps": 30,
            "totalTime": 0,
            "weight": 0,
            "id": 3
        },
        {
            "type": "sqd",
            "reps": 10,
            "totalTime": 20,
            "weight": 0,
            "id": 4
        }
    ],
    "2019/04/23": [
        {
            "type": "push",
            "reps": 2,
            "totalTime": 0,
            "weight": 10,
            "id": 5
        },
        {
            "type": "tri",
            "reps": 20,
            "totalTime": 0,
            "weight": 0,
            "id": 6
        },
        {
            "type": "salt",
            "reps": 200,
            "totalTime": 50,
            "weight": 0,
            "id": 7
        },
        {
            "type": "sqd",
            "reps": 10,
            "totalTime": 20,
            "weight": 0,
            "id": 8
        },{
            "type": "sqd",
            "reps": 10,
            "totalTime": 20,
            "weight": 0,
            "id": 9
        }
    ]
};

class ActivitiesPerDayPage extends React.Component {
    constructor({ match, location }) {
        super();
        const params = new URLSearchParams(location.search);
        let day = params.get('day')
        // let activitiesList = demoData[day]

        this.state = {
            date: day,
            activities: [],
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:5000/activities')
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
