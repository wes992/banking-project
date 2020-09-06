import React from "react";
import { Switch, Route } from "react-router-dom";

import Accounts from './components/Accounts';
import Rewards from './components/Rewards';
import Settings from './components/Settings';
import Spending from './components/Spending';
import Bills from './components/Bills';


const Routes = ({accounts}) => {
 
  return (
    <Switch>
      <Route exact path="/">
        <Accounts accounts={accounts}/>
      </Route>
      <Route path="/rewards">
        <Rewards accounts={accounts}/>
      </Route>      
      <Route path="/bills">
        <Bills accounts={accounts}/>
      </Route>
      <Route path="/settings">
        <Settings accounts={accounts}/>
      </Route>
      <Route path="/spending">
        <Spending accounts={accounts}/>
      </Route>            
    </Switch>
  );
};

export default Routes;