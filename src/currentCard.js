import React from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


const CurrentCard = ({ accounts }) => {
    const allAccounts = accounts.map(account => {
        return (
            <div  id="PaymentForm">
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
    )
}
export default CurrentCard;