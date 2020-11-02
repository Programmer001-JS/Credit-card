import React from 'react'
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';


const CurrentCard = ({ accountsCard }) => {
    const allAccounts = accountsCard.map(account => {
        return (
            <div>
                <Cards
                    number={account.number}
                    name={account.name}
                    expiry={account.expiry}
                    cvc={account.cvc}
                    focused={account.focus}
                />
            </div>
        )
    })



    return (
        <div>
            {allAccounts}

        </div>
    );
}



export default CurrentCard;
