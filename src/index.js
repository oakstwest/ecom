import { HashRouter } from 'react-router-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { injectGlobal } from 'styled-components';




ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
unregister();

injectGlobal`
  body {
    background: url(https://images.pexels.com/photos/460607/pexels-photo-460607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-attachment:fixed;
    background-color: #cccccc;
    min-height: 100vh;
    height:auto;
    position:absolute;
    width: auto ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: relative;
    padding:0;
    margin: 0;
    font-family:sans;
  }`



