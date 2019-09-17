import React from 'react';
import ActivityForm from '../components/ActivityForm';
import "react-router-dom";

class ActivityFormPage extends React.Component {
  constructor({ location }) {
    super();
    const params = new URLSearchParams(location.search);
    let day = params.get('day')

    this.state = {
      activities: [],
      date: day,
    }
  }

  render() {
    return (
      <div className="container">
        <ActivityForm
          date={this.state.date}/>
      </div>
    );
  }
}

export default ActivityFormPage;
