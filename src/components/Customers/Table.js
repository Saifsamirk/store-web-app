import React, { Component } from "react";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";
// import { browserHistory } from "react-router";
// import { withRouter } from "react-router-dom";
import _ from 'lodash'
import axios from 'axios'

export default class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headers: [
                { name: "#", sort: 0 },
                { name: "Customer Name", sort: 0 },
                { name: "Email Address", sort: 0 },
            ],
            customers: []
        }
        this.AddHandler = this.AddHandler.bind(this);
    }

    async componentDidMount() {
        const data = await axios.get('http://localhost:3000/api/customers/')
        // console.log(data)
        this.setState({
            customers: data.data
        })
        // console.log(this.state.customers)
    }

    async AddHandler() {
        this.props.history.push()
    }

    render() {

        return (
            <div className="container">
                {/* render here this.setState.customers */}
                <Link
                    // styled as button
                    to='/customers/add'
                >Add Customer
                </Link>
            </div>
        );
    }
}
            // const headerElements = this.state.headers.map((header, index) => { })





// export default CustomerList;

