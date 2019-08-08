import React, {Component} from 'react';
import axios from 'axios';


export default class Form extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoFormFirstName = this.onChangeTodoFormFirstName.bind(this);
        this.onChangeTodoFormLastName = this.onChangeTodoFormLastName.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_FormFirstName: '',
            todo_FormLastName: '',       
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoFormFirstName(e){
        this.setState({
            todo_FormFirstName: e.target.value
        });
    }

    onChangeTodoFormLastName(e){
        this.setState({
            todo_FormLastName: e.target.value
        });
    }


    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo FormFirstName: ${this.state.todo_FormFirstName}`);
        console.log(`Todo FormLastName: ${this.state.todo_FormLastName}`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);


        const newJob = {
            todo_FormFirstName: this.state. todo_FormFirstName,
            todo_FormLastName: this.state.todo_FormLastName,
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:3000/jobs/add', newJob)
        .then(res => console.log(res.data));

        this.setState({
            todo_FormFirstName: '',
            todo_FormLastName: '',
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (           
            <div style={{marginTop: 20}}>
                <h3>Job Form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                        <input  type="text"
                                className="form-control" placeholder="FirstName"
                                value={this.state.todo_FormFirstName}
                                onChange={this.onChangeTodoFormFirstName}
                                />


                        </div>
                        <div className="col">
                        <input  type="text"
                                className="form-control" placeholder="LastName"
                                value={this.state.todo_FormLastName}
                                onChange={this.onChangeTodoFormLastName}
                                />
                        </div>

                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />

                                
                    </div>
                    <div className="form-group">
                        <label>Phone Number </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Grass Cut</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Rake Leaves</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Trim Bushes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Plant Flowers</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}