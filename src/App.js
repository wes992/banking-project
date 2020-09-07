import React, {Component} from 'react';
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
          <Routes accounts={accounts}/>
        </Router>
      </div>
    );
  }
}


// $(function() {
//   $('a.item[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
// });

export default App;
