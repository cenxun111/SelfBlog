import React from 'react'
import ReactDom from "react-dom"
import App from './App'
import "regenerator-runtime/runtime";
import "core-js/stable"
// import DataProvider from "./redux/store"
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
 
    // <DataProvider>
    <App />,
    // </DataProvider>,
    
document.getElementById('root'))