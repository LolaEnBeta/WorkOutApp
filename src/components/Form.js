import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "hola"
        }
    }

    render() {
        return(
            <form>
                <label>
                    Which activity did you do?
                    <select name="type" id="type">
                        <option value="">Select one</option>
                        <option value="Pushups">Pushups</option>
                        <option value="ABS">ABS</option>
                    </select>
                </label>

                <label>
                    How many repetitions did you do?
                    <input type="text" name="reps" id="reps" />
                </label>

                <label>
                        How many time did you work out?
                        <input type="text" name="totalTime" id="totalTime" />
                </label>

                <label>
                    How many weight did you use?
                    <input type="text" name="weight" id="weight" />
                </label>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        );
    }
}

export default Form;
