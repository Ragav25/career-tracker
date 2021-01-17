import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Header } from './components/Header';
import { SignUp } from './components/register';
import { Login } from './components/login';
import SignOut from './components/logout';


const routing = (
  <Router>
    <React.StrictMode>
    <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={SignOut} />
      </Switch>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
