import React from 'react';
import Activity from '../components/Activity';

const demoData = {
    "2019-09-12": [
        {
            "type": "abs",
            "reps": 2,
            "totalTime": 10,
            "weight": 0,

        },
        {
            "type": "salt",
            "reps": 200,
            "totalTime": 50,
            "weight": 0,

        }
    ],
    "2019-08-26": [
        {
            "type": "abs",
            "reps": 30,
            "totalTime": 0,
            "weight": 0,

        },
        {
            "type": "sqd",
            "reps": 10,
            "totalTime": 20,
            "weight": 0,

        }
    ],
    "2019-04-23": [
        {
            "type": "push",
            "reps": 2,
            "totalTime": 0,
            "weight": 10,

        },
        {
            "type": "tri",
            "reps": 20,
            "totalTime": 0,
            "weight": 0,

        },
        {
            "type": "salt",
            "reps": 200,
            "totalTime": 50,
            "weight": 0,

        },
        {
            "type": "sqd",
            "reps": 10,
            "totalTime": 20,
            "weight": 0,

        },{
            "type": "sqd",
            "reps": 10,
            "totalTime": 20,
            "weight": 0,

        }
    ]
};

class ActivitiesPerDayPage extends React.Component {
    constructor({ match, location }) {
        super();
        const params = new URLSearchParams(location.search);
        let day = params.get('day')
        let activitiesList = demoData[day]

        this.state = {
            date: day,
            activities: activitiesList,
        }
    }

    render() {
        return (
            <div>
                <div> DAY: {this.state.date} </div>
                <div className="">
                    <div className="card-columns">
                        {this.state.activities.map(activity => {
                            return (
                                <Activity
                                    // onActivityDeleted={removeActivity.bind(this)}
                                    // key={activity.type}
                                    type={activity.type}
                                    reps={activity.reps}
                                    totalTime={activity.totalTime}
                                    weight={activity.weight}
                                    // id={activity.id}
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
