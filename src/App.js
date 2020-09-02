import React, {Component} from 'react';
import Accounts from './components/Accounts';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  state = {
    accounts: []
  }

  componentDidMount() {
    axios
      .get("http://technivationtestapi.azurewebsites.net/api/accounts")
      .then(response => {
      const newAccounts =response.data.map(account => {
        return {
          number : account.number,
          maskedNumber : account.maskedNumber,
          nickname : account.nickname,
          isEnrolledInRewards : account.isEnrolledInRewards,
          rewardsPoints :  account.rewardsPoints,
          accountType : account.accountType,
          isEligibleForRewards : account.isEligibleForRewards,
          currentBalance : account.currentBalance,
          formattedCurrentBalance : account.formattedCurrentBalance
        }
      });
      
      const newState = Object.assign({}, this.state, {
        accounts: newAccounts
      });

      this.setState(newState)
    }).catch(error => console.log(error))
  }

render() {
  return (
    <Accounts accounts={this.state.accounts} />
  );
}
}


export default App;
