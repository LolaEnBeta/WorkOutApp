import React from 'react';
import ActivityForm from '../components/ActivityForm';
import Activity from '../components/Activity';

class ActivityFormPage extends React.Component {
    constructor() {
        super();
        this.state = {
          activities: [],
        }
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
            let activityIndex = this.state.activities.map(activity => {
              return activity.id
            }).indexOf(id);

            let activities = this.state.activities;
            activities.splice(activityIndex, 1);

            this.setState({
              activities: activities
            });
          }

        return (
            <div className="container">
                <ActivityForm onActivityCreated={createActivity.bind(this)}/>
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
                        date={this.state.date}
                    />
                    );}
                )}
            </div>
        )
    }
}

export default ActivityFormPage;
