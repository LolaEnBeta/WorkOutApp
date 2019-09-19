import React from 'react';
import axios from 'axios';
import Activity from '../components/Activity';

class Activities extends React.Component {
    constructor() {
        super();
        this.state = {
            type: '',
            activities: [],
        }
    }

    componentDidMount() {
        if (this.state.type) {
            axios.get('http://127.0.0.1:5000/type', {
                params: {
                    type: this.state.type
                }
            })
            .then(res => {
                const activities = res.data;
                this.setState({ activities })
            });
        }
    }

    async removeActivity(id) {
        let response = await axios.delete('http://127.0.0.1:5000/activities/' + id);

        if (response.status === 200) {
            response = await axios.get('http://127.0.0.1:5000/activities')
            const activities = response.data;
            this.setState({ activities });
        }
    }

    changeStateValues ({name, value}) {

        axios.get('http://127.0.0.1:5000/type', {
            params: {
                type: value
            }
        })
        .then(res => {
            const activities = res.data;
            this.setState({ activities })
        });
    };

    render() {
        return (
            <div className="container">
                <select
                    name="type"
                    onChange={event => this.changeStateValues(event.target)}>
                    <option value="">Select one</option>
                    <option value="Pushups">Pushups</option>
                    <option value="ABS">ABS</option>
                </select>
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
        );
    }
}

export default Activities;
