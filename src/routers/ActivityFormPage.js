import React from 'react';
import ActivityForm from '../components/ActivityForm';
import Activity from '../components/Activity';
import axios from 'axios';

class ActivityFormPage extends React.Component {
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
        const createActivity = activity => {
            let activities = this.state.activities;
            activities.push(activity);

            this.setState({
              activities: activities,
            })
        }


        const removeActivity = id => {
          axios ({
              method: 'DELETE',
              header: "Content-Type: application/json",
              url: 'http://127.0.0.1:5000/activities/' + id,
          }).then(response => {
              if (response.status === 200) {
                axios.get('http://127.0.0.1:5000/activities')
                  .then(res => {
                    const activities = res.data;
                    this.setState({ activities })
                });
              }
          })
        }

        return (
            <div className="container">
                <ActivityForm
                // onActivityCreated={createActivity.bind(this)}
                />
                <div>
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
            </div>
        );
    }
}

export default ActivityFormPage;
