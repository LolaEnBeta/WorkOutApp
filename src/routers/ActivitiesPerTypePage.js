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
            <div className="card mx-auto mt-4" style={{width: 1000}}>
                    <h5 className="card-header bg-info text-light text-center py-4">
                        <strong>Here you can see all the activities or select by <em>type</em>:</strong>
                    </h5>
                    <select
                        className="browser-default custom-select"
                        name="type"
                        onChange={event => this.changeStateValues(event.target)}>
                        <option value="">Show all the activities</option>
                        <option value="Pushups">Show Pushups activities</option>
                        <option value="ABS">Show ABS activities</option>
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
