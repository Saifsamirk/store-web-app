import React, { Component } from "react";
import axios from 'axios'




export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth", {
                email: this.state.email,
                password: this.state.password
            })
            const jwt = response.data
            console.log(jwt)
            if(jwt) {
                this.props.history.push("/")
                localStorage.setItem("token",jwt)
            }
        } catch (error){
            console.log(error)
        }
            
    }

handleEmailChange(event) {
    const email = event.target.value;
    this.setState({ email: email })
    console.log(this.state.email)
}
handlepasswordChange(event) {
    const password = event.target.value;
    this.setState({ password: password })
    console.log(this.state.password)
}
render() {
    return (
        <React.Fragment>
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>password:</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.password}
                            onChange={this.handlepasswordChange}
                        />
                    </div>
                    <button
                        variant="primary"
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
}
}