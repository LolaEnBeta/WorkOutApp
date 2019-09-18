import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class ActivityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            reps: '',
            totalTime: '',
            weight: '',
            date: this.props.date,
        }
    };

    async addActivity(e) {
        e.preventDefault();

        let newActivity = {
            type: this.state.type,
            reps: this.state.reps,
            totalTime: this.state.totalTime,
            weight: this.state.weight,
            date: this.state.date,
        }

        let response = await axios.post('http://127.0.0.1:5000/activities',{
              "type": newActivity.type,
              "reps": newActivity.reps,
              "totalTime": newActivity.totalTime,
              "weight": newActivity.weight,
              "date": newActivity.date,
        });

        if (response.status === 200) {
            response = await this.props.history.push('/day?day=' + this.state.date) 
        }
    };

    changeStateValues ({name, value}) {
        this.setState({
          [name]: value
        })
    };

    render() {
        return(
            <form
                onSubmit={this.addActivity.bind(this)}>

                <label>
                    Which activity did you do?
                    <select
                        name="type"
                        onChange={event => this.changeStateValues(event.target)}>
                        <option value="">Select one</option>
                        <option value="Pushups">Pushups</option>
                        <option value="ABS">ABS</option>
                    </select>
                </label>

                <label>
                    How many repetitions did you do?
                    <input
                        type="text"
                        name="reps"
                        onChange={event => this.changeStateValues(event.target)}/>
                </label>

                <label>
                        How many time did you work out?
                        <input
                            type="text"
                            name="totalTime"
                            onChange={event => this.changeStateValues(event.target)}/>
                </label>

                <label>
                    How many weight did you use?
                    <input
                        type="text"
                        name="weight"
                        onChange={event => this.changeStateValues(event.target)}/>
                </label>

                <input type="submit" value="ADD" />
            </form>
        );
    }
}

export default withRouter(ActivityForm);
