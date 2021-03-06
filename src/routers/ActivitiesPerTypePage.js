import React from 'react';
import axios from 'axios';
import Activity from '../components/Activity';

class ActivitiesPerTypePage extends React.Component {
    constructor() {
        super();
        this.state = {
            type: '',
            activities: [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/type', {
            params: {
                type: this.state.type,
            }
        }).then(res => {
            const activities = res.data;
            this.setState({ activities })
        });
    }

    async removeActivity(id) {
        let response = await axios.delete('http://127.0.0.1:5000/activities/' + id);

        if (response.status === 200) {
            response = await axios.get('http://127.0.0.1:5000/type', {
                params: {
                    type: this.state.type
                }
            })
            const activities = response.data;
            this.setState({ activities });
        }
    }

    changeStateValues ({value}) {
        axios.get('http://127.0.0.1:5000/type', {
            params: {
                type: value
            }
        })
        .then(res => {
            const activities = res.data;
            this.setState({
                activities: activities,
                type: value
            })
        });
    };

    render() {
        return (
            <div className="card mx-auto m-4" style={{width: 1000}}>
                <h5 className="card-header bg-info text-light text-center py-4">
                    <strong>Here you can see all the activities or select by <em>type</em>:</strong>
                </h5>
                <select
                    className="browser-default custom-select"
                    name="type"
                    onChange={event => this.changeStateValues(event.target)}>
                    <option value=''>Show all the activities</option>
                    <option value="Pushups">Pushups</option>
                    <option value="ABS">ABS</option>
                    <option value="Jumping jacks">Jumping jacks</option>
                    <option value="Wall sit">Wall sit</option>
                    <option value="Squat">Squat</option>
                    <option value="Lunge">Lunge</option>
                    <option value="Triceps">Triceps</option>
                    <option value="Plank">Plank</option>
                    <option value="Walk">Walk</option>
                    <option value="Bicycle">Bicycle</option>
                    <option value="Swim">Swim</option>
                    <option value="Run">Run</option>
                    <option value="Yoga">Yoga</option>
                </select>
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
                            );}
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivitiesPerTypePage;
