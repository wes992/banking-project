import React from "react";
import { Switch, Route } from "react-router-dom";

import Accounts from './components/Accounts';
import Rewards from './components/Rewards';
import Settings from './components/Settings';
import Spending from './components/Spending';
import Bills from './components/Bills';
import Login from './components/Login';
import Nav from './components/Nav'



const Routes = ({accounts}, handler) => {
 
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path="/accounts">
        <Nav />
        <Accounts accounts={accounts}/>
      </Route>
      <Route path="/rewards">
        <Nav />
        <Rewards accounts={accounts}/>
      </Route>      
      <Route path="/bills">
        <Nav />
        <Bills accounts={accounts}/>
      </Route>
      <Route path="/settings">
        <Nav />
        <Settings accounts={accounts}/>
      </Route>
      <Route path="/spending">
        <Nav />
        <Spending accounts={accounts}/>
      </Route>            
    </Switch>
  );
};

export default Routes;