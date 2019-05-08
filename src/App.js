import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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

import AppRouter from "./components/router"

export const history = createHistory();

class App extends Component {
  render() {
    return (
    //  <AppRouter ></AppRouter>
      <AppRouter history = {history}></AppRouter>
    );
  }
}

export default App;
