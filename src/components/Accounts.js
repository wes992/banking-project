import React from 'react';
import Account from './Account';

const Accounts = ({accounts}) => {
    // const [account, setAccount] = useState([]);
    // const [balance, setBalance] = useState([]);

    return ( 
        <div className="accountsContainer">
            <Account accounts={accounts}/>
        </div>
     );
}
 
export default Accounts;