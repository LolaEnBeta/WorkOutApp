import React from 'react';
import axios from 'axios';
import Activity from '../components/Activity';

class Activities extends React.Component {
    constructor() {
        super();
        this.state = {
            date: "2019/09/17",
            activities: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/activities',{
            params: {
                day: this.state.date,
            }
        }).then(res => {
            const activities = res.data;
            this.setState({ activities })
        });
    }

    async removeActivity(id) {
        let response = await axios.delete('http://127.0.0.1:5000/activities/' + id);

        if (response.status === 200) {
            response = await axios.get('http://127.0.0.1:5000/activities')
            const activities = response.data;
            this.setState({ activities });
        }
    }
    render() {
        return (
            <div className="container">
                <select
                    name="type">
                    <option value="">Select one</option>
                    <option value="Pushups">Pushups</option>
                    <option value="ABS">ABS</option>
                </select>
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
                    );}
                )}
            </div>
        );
    }
}

export default Activities;
