import React, { Component } from 'react'
import "./addCard.css"
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';

class AddCard extends Component {
    state = {
        newCard: {
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: '',
        }
    }

    handleInputChange = (event) => {
        let id = event.target.id
        let newCardCopy = { ...this.state.newCard }
        newCardCopy[id] = event.target.value
        this.setState({ newCard: newCardCopy })
    }
    addNewCard = () => {
        this.props.addNewCardToState(this.state.newCard);
        
    }

    render() {
        return (
            <div>
                
                <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Card Number"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    placeholder="MM/YY Expiry"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                <input
                    type="tel"
                    name="cvc"
                    id="cvc"
                    placeholder="CVC"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                <button className="addCard" onClick={this.addNewCard}>Add Card</button>

            </div>
        )
    }
}
export default AddCard;