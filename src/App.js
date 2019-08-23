import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActivityForm from './components/ActivityForm';
import Activity from './components/Activity';
import CalendarPage from './routers/CalendarPage';


function Form() {
  const createActivity = activity => {
    let activities = this.state.activities;
    activities.push(activity);

    this.setState({
      activities: activities,
    })
  }
  return (<ActivityForm onActivityCreated={createActivity.bind(this)}/>)
}

function Home() {
  return(<CalendarPage />)
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
    }
  }
  render() {

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
      <Router>
        <div>
          <nav className="navbar navbar-light bg-light">
            <ul>
              <Link className="btn btn-secondary mr-3" to="/">Home</Link>
              <Link className="btn btn-secondary mr-3" to="/form/">Form</Link>
            </ul>
          </nav>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/form/" component={Form} />
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
                    date={this.state.date}
                  />
                );}
              )}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
