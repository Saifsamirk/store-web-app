import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Details from "./Details";
import Default from "./Default";
import Product from "./Product";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Modal from "./Modal";
import Customers from './Customers/Table'
import createHistory from "history/createBrowserHistory";
import CustomerList from "./Customers/Table";
import CustomersForm from "./Customers/Form"
import Login from "./Login"



class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={(props) =><Login {...props}></Login> } />
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
          
        </Switch>
        <Modal />
       
        {/* <Router history={history}>
          <Switch >
            <Route path="/customers" exact={true} component={(props) => <CustomerList {...props} history={this.props.history}></CustomerList>} />
            <Route path="/customers/add" exact={true} component={(props) => <CustomersForm {...props} history={this.props.history}></CustomersForm>} />
          </Switch>
        </Router> */}
      </React.Fragment>
    );
  }
}

export default AppRouter;
