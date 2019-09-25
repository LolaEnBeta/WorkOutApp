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

        if ((isNaN(newActivity.reps)) || (isNaN(newActivity.totalTime)) || (isNaN(newActivity.weight))) {
            alert("You need to writte a number.")
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
            <div className="card mx-auto" style={{width: 450}}>
                <h5 className="card-header bg-danger text-white text-center py-4">
                    <strong>Modify the activity</strong>
                </h5>
                <div className="card-body mx-4 mt-4">
                    <form
                        onSubmit={this.modifyActivity.bind(this)}>
                        <div className="md-form pb-1 pb-md-3">
                            <select
                                className="browser-default custom-select"
                                name="type"
                                value={this.state.type}
                                onChange={event => this.changeStateValues(event.target)}>
                                <option value="">Which activity did you do?</option>
                                <option value="Pushups">Pushups</option>
                                <option value="ABS">ABS</option>
                            </select>
                        </div>

                        <div className="md-form pb-1 pb-md-3">
                            <input
                                className="form-control"
                                type="text"
                                name="reps"
                                placeholder="How many repetitions did you do?"
                                value={this.state.reps}
                                onChange={event => this.changeStateValues(event.target)}/>
                        </div>

                        <div className="md-form pb-1 pb-md-3">
                            <input
                                className="form-control"
                                type="text"
                                name="totalTime"
                                placeholder="How many time did you work out?"
                                value={this.state.totalTime}
                                onChange={event => this.changeStateValues(event.target)}/>
                        </div>

                        <div className="md-form pb-1 pb-md-3">
                            <input
                                className="form-control"
                                type="text"
                                name="weight"
                                placeholder="How many weight did you use?"
                                value={this.state.weight}
                                onChange={event => this.changeStateValues(event.target)}/>
                        </div>

                        <div className="row d-flex align-items-center mb-4">
                            <div className="col-md-1 col-md-5 d-flex align-items-start">
                                <div className="text-center">
                                    <input className="btn btn-outline-danger btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit" value="MODIFY" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ModifyForm);
