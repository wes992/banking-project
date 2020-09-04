import React from "react";
import { Switch, Route } from "react-router-dom";

import Accounts from './components/Accounts';
import Rewards from './components/Rewards';


const Routes = ({accounts}) => {
 
  return (
    <Switch>
      <Route exact path="/">
        <Accounts accounts={accounts}/>
      </Route>
      <Route path="/rewards">
        <Rewards />
      </Route>
    </Switch>
  );
};

export default Routes;