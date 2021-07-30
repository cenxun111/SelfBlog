import React from 'react'
import Navbar from './header/Navbar'
import Layout from './mainContent/Layout'
import "./App.css";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Redirect,
} from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            <Route path ="/login">
                <Login />
            </Route>
            <Route path ="/register">
                <Register />
            </Route>
            </Switch>
        </Router>
    )
}

export default App
