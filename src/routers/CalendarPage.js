import React from 'react';
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";

class CalendarPage extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      currentDay: this.formatDate(new Date()),
    }
  }

  render() {
    const onChange = date => {
      this.setState({
        date: date,
        currentDay: this.formatDate(date)
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
          to={"/day?day=" + this.state.currentDay}
        >
          See activities
        </Link>
      </div>
    )
  }

  formatDate(date) {
    let day = date;
    let dd = "" + day.getDate();
    let mm = "" + (day.getMonth() + 1);
    let yyyy = day.getFullYear();

    if (dd.length < 2) {
      dd = "0" + dd;
    }
    if (mm.length < 2) {
      mm = "0" + mm;
    }

    return yyyy+"-"+mm+"-"+dd;
  }
}

export default CalendarPage;
