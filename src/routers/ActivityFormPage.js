import React from 'react';
import ActivityForm from '../components/ActivityForm';

class ActivityFormPage extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
    }
  }

  render() {
    return (
      <div className="container">
        <ActivityForm />
      </div>
    );
  }
}

export default ActivityFormPage;
