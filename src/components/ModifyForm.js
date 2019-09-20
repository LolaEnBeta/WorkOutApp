import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class ModifyForm extends React.Component {
    constructor({ location }) {
        super();
        const params = new URLSearchParams(location.search);
        let id = params.get('id');
        let type = params.get('type');
        let reps = params.get('reps');
        let totalTime = params.get('totalTime');
        let weight = params.get('weight');

        this.state = {
            id: id,
            type: type,
            reps: reps,
            totalTime: totalTime,
            weight: weight
        }
    };

    async modifyActivity(e) {
        e.preventDefault();

        let newActivity = {
            id: this.state.id,
            type: this.state.type,
            reps: this.state.reps,
            totalTime: this.state.totalTime,
            weight: this.state.weight,
            date: this.state.date,
        }

        if ((newActivity.type === "") || (newActivity.reps === "")) {
            alert("You need select the activity and put the repetitions you did!!")
        }

        if (newActivity.totalTime === "") {
            newActivity.totalTime = 0;
        }

        if (newActivity.weight === "") {
            newActivity.weight = 0;
        }

        let response = await axios.put('http://127.0.0.1:5000/activities/' + this.state.id, {
            "id": newActivity.id,
            "type": newActivity.type,
            "reps": newActivity.reps,
            "totalTime": newActivity.totalTime,
            "weight": newActivity.weight,
        });

        if (response.status === 200) {
            response = await this.props.history.push('/')
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
                className="container"
                onSubmit={this.modifyActivity.bind(this)}>

                <label>
                    Which activity did you do?
                    <select
                        name="type"
                        value={this.state.type}
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
                        value={this.state.reps}
                        onChange={event => this.changeStateValues(event.target)}/>
                </label>

                <label>
                        How many time did you work out?
                        <input
                            type="text"
                            name="totalTime"
                            value={this.state.totalTime}
                            onChange={event => this.changeStateValues(event.target)}/>
                </label>

                <label>
                    How many weight did you use?
                    <input
                        type="text"
                        name="weight"
                        value={this.state.weight}
                        onChange={event => this.changeStateValues(event.target)}/>
                </label>

                <input type="submit" value="MODIFY" />
            </form>
        );
    }
}

export default withRouter(ModifyForm);
