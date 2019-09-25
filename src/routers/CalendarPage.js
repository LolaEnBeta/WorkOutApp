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

  onChange = date => {
    this.setState({
      date: date,
      currentDay: this.formatDate(date)
    });
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

    return yyyy+"/"+mm+"/"+dd;
  }

  render() {
    return (
      <div className="card mx-auto m-4" style={{width: 1000}}>
        <h5 className="card-header bg-info text-light text-center py-4">
          <strong>Select one day to create and see the activities</strong>
        </h5>
        <Link
          className="btn btn-light text-secondary"
          to={"/day?day=" + this.state.currentDay} >
          <strong>CHOOSE THIS DAY</strong>
        </Link>
        <div>
          <Calendar
            className="card-body mx-auto m-4"
            onChange={this.onChange.bind(this)}
            value={this.state.date} />

        </div>

      </div>
    );
  }
}

export default CalendarPage;
