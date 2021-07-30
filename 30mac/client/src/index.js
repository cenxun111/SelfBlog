import React from 'react'
import ReactDom from "react-dom"
import App from './App'
import "regenerator-runtime/runtime";
import "core-js/stable"
// import DataProvider from "./redux/store"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { BrowserRouter } from "react-router-dom";


ReactDom.render(
 
    // <DataProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    // </DataProvider>,
    
document.getElementById('root'))