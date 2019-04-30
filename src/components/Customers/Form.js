import React, { Component } from "react";

import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import axios from 'axios'



export default class CustomersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formControl: {
                email: "",
                name: "",
                address: ""
            }
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.EditHandler = this.EditHandler.bind(this);
    }


    handleAddressChange(event) {
        const formControl = this.state.formControl;
        formControl.address = event.target.value;
        this.setState({ formControl: formControl });
        console.log(formControl.address)
    }
    handleEmailChange(event) {
        const formControl = this.state.formControl;
        formControl.email = event.target.value;
        this.setState({ formControl: formControl });
        console.log(formControl.email)
    }
    handleNameChange(event) {
        const formControl = this.state.formControl;
        formControl.name = event.target.value;
        this.setState({ formControl: formControl });
        console.log(formControl.name)
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:3000/api/customers/add", {
            name: this.state.formControl.name,
            email: this.state.formControl.email,
            address: this.state.formControl.address
        })
        this.props.history.push("/customers");
    }

    render() {

        return (
            <div className="container">
                {/* onSubmit={this.props.match.params.id ? this.EditHandler : this.handleSubmit} */}
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Client name:</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.formControl.name}
                            onChange={this.handleNameChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.formControl.address}
                            onChange={this.handleAddressChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address:</label>
                        <input
                            className="form-control"
                            type="email"
                            value={this.state.formControl.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>

                    <button
                        variant="primary"
                        type="submit"
                    >
                        {/* {this.props.match.params.id ? "Edit Client" : "Add Client"} */}add 
                    </button>
                </form>
            </div>
        );
    }
}