import React, {Component} from 'react';
import Nav from './components/Nav'
// import axios from 'axios';
import config from './accountData/config';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  state = {
    accounts: []
  }

  componentDidMount() {
    fetch(config.url + '/api/accounts').then(res=>res.json()).then(
      result=> {
        this.setState({accounts:result})
      }
    )
  }
  


  render() {
    const { accounts } = this.state
    return (
      <div className="app">
        <Router>
          <Nav />
          <Routes accounts={accounts}/>
        </Router>
      </div>
    );
  }
}


export default App;
