import React from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import AddCard from "./addCard"


class CurrentCard extends React.Component {
    state = {
        accounts: 
            {
                number: '3345678890084632',
                name: 'danilo',
                expiry: '2234',
                cvc: '432',
                focus: '',

            }
    }

    addNewCardToState = (acc) => {
        this.setState({
            accounts: [...this.state.accounts, acc]
        })
    }

    render() {
        return (
            <div className="app">
                <Cards
                    number={this.state.accounts.number}
                    name={this.state.accounts.name}
                    expiry={this.state.accounts.expiry}
                    cvc={this.state.accounts.cvc}
                    focused={this.state.accounts.focus}

                />
                <AddCard addNewCardToState={this.addNewCardToState} />

            </div>
        );
    }
}


export default CurrentCard;
