import React, { useState } from 'react';
import Account from './Account';

const Accounts = () => {
    // const [account, setAccount] = useState([]);
    // const [balance, setBalance] = useState([]);

    return ( 
        <div className="accountsContainer">
            <Account />
        </div>
     );
}
 
export default Accounts;