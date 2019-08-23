import React from 'react';
import ActivityForm from './components/ActivityForm';
import Activity from './components/Activity';
import Calendar from 'react-calendar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      activities:[]
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

    const onChange = date => {
      this.setState({
        date: date
      });
    }

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <button className="btn btn-secondary">
            Home
          </button>

        </nav>

        <div>
          <div className="container mt-5 ml-5">
            <Calendar
              onChange={onChange.bind(this)}
              value={this.state.date}/>
          </div>
          <ActivityForm onActivityCreated={createActivity.bind(this)}/>
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
                  id={activity.id}/>
              );}
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
