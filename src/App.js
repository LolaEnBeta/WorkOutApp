import React from 'react';
import ActivityForm from './components/ActivityForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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

    return (
      <div>
        <ActivityForm onActivityCreated={createActivity.bind(this)}/>
      </div>
    );
  }
}

export default App;
