import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import Default from "./components/Default";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Customers from './components/Customers/Table'
import createHistory from "history/createBrowserHistory";
import CustomerList from "./components/Customers/Table";
import CustomersForm from "./components/Customers/Form"
//we are going to work with a context API



export const history = createHistory();

class App extends Component {
  render() {
    return (
      <React.Fragment history={history}>
        {/* <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
          
        </Switch>
        <Modal />
        <Route
          path ='/customers'
          Component = {(props) => <Customers {...props} history={history} />}
          exact={true}
        ></Route> */}
        <Router history={history}>
          <Switch >
            <Route path="/customers" exact={true} component={(props) => <CustomerList {...props} history={history}></CustomerList>} />
            <Route path="/customers/add" exact={true} component={(props) => <CustomersForm {...props} history={history}></CustomersForm>} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
