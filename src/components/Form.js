import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            type: '',
            reps: '',
            totalTime: '',
            weight: ''
        }
    }

    addActivity() {

    }

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

export default Form;
