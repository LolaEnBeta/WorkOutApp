import React from 'react';
import Form from '../components/Form';

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
        <Form />
      </div>
    );
  }
}

export default ActivityFormPage;
