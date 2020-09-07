import React from 'react';
import Account from './Account';

const Accounts = ({accounts}) => {

    return ( 
        <div className="accountsContainer">
            <Account accounts={accounts}/>
        </div>
     );
}
 
export default Accounts;