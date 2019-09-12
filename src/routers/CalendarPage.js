import React from 'react';
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";

class CalendarPage extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    }
  }

  render() {
    const onChange = date => {
      this.setState({
        date: date,
      });
    }

    return (
      <div className="container mt-5 ml-5">
        <Calendar
          onChange={onChange.bind(this)}
          value={this.state.date}
        />
        <Link
          className="btn btn-secondary mr-3"
          to={"/day?day="}
        >
          See activities
        </Link>
      </div>
    )
  }
}

export default CalendarPage;
