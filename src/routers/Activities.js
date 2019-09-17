import React from 'react';
import axios from 'axios';
import Activity from '../components/Activity';

class Activities extends React.Component {
    constructor() {
        super();
        this.state = {
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

        async function removeActivity(id) {
            let response = await axios ({
                method: 'DELETE',
                header: "Content-Type: application/json",
                url: 'http://127.0.0.1:5000/activities/' + id,
            });

            if (response.status === 200) {
                response = await axios.get('http://127.0.0.1:5000/activities')
                const activities = response.data;
                this.setState({ activities });
            }
        }

        return (
            <div className="container">
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
                    );}
                )}
            </div>
        );
    }
}

export default Activities;
