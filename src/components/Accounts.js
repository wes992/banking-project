import React from 'react';
import Account from './Account';

const Accounts = ({accounts}) => {
    // const [account, setAccount] = useState([]);
    // const [balance, setBalance] = useState([]);

    return ( 
        <div className="accountsContainer">
            <h3>Current Accounts</h3>
            <Account accounts={accounts}/>
        </div>
     );
}
 
export default Accounts;