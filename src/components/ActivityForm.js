import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class ActivityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            reps: null,
            totalTime: 0,
            weight: 0,
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

        if ((newActivity.type === null) || (newActivity.reps === null)) {
            alert("You need select the activity and put the repetitions you did!!")
        }

        if ((isNaN(newActivity.reps)) || (isNaN(newActivity.totalTime)) || (isNaN(newActivity.weight))) {
            alert("You need to writte a number.")
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
            <div className="card mx-auto" style={{width: 450}}>
                <h5 className="card-header white-text text-center py-4">
                    <strong>Create a new activity</strong>
                </h5>
                <div className="card-body mx-4 mt-4">
                    <form
                        onSubmit={this.addActivity.bind(this)}>
                        <div className="md-form pb-1 pb-md-3">
                            <select
                                name="type"
                                className="browser-default custom-select"
                                onChange={event => this.changeStateValues(event.target)}>
                                <option value="">Which activity did you do?</option>
                                <option value="Pushups">Pushups</option>
                                <option value="ABS">ABS</option>
                            </select>
                        </div>

                        <div className="md-form pb-1 pb-md-3">
                            <input
                                type="text"
                                className="form-control"
                                name="reps"
                                placeholder="How many repetitions did you do?"
                                onChange={event => this.changeStateValues(event.target)}/>
                        </div>

                        <div className="md-form pb-1 pb-md-3">
                            <input
                                type="text"
                                className="form-control"
                                name="totalTime"
                                placeholder="How many time did you work out?"
                                onChange={event => this.changeStateValues(event.target)}/>
                            </div>

                        <div className="md-form pb-1 pb-md-3">
                            <input
                                type="text"
                                className="form-control"
                                name="weight"
                                placeholder="How many weight did you use?"
                                onChange={event => this.changeStateValues(event.target)}/>
                        </div>

                        <div className="row d-flex align-items-center mb-4">
                            <div className="col-md-1 col-md-5 d-flex align-items-start">
                                <div className="text-center">
                                    <input className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit" value="ADD" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ActivityForm);
