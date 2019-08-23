import React from 'react';
import Calendar from 'react-calendar';

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
              date: date
            });
          }

        return (
            <div className="container mt-5 ml-5">
              <Calendar
                onChange={onChange.bind(this)}
                value={this.state.date}/>
            </div>
        )
    }
}

export default CalendarPage;
