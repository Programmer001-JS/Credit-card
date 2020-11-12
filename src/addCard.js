import React, { Component } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import "./addCard.css"



class AddCard extends Component {
    state = {
        newCard: {
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: '',
        }
    };
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        let id = e.target.id;
        const newCardCopy = { ...this.state.newCard }
        newCardCopy[id] = e.target.value;
        this.setState({
            newCard: newCardCopy
        })
    }
    addNewCard = () => {
        this.props.addNewCardToState(this.state.newCard);
    }
    deleteCard = () => {
        this.props.deleteCard(this.state.newCard);
       
    }



    render() {
        const { number, name, cvc } = this.state.newCard;
        const isEnabled = number.length === 16 && name.length > 2 && cvc.length === 3;


        return (
            <div className="newCard">
                <h1>Add New Card</h1>
                <form className="form">
                    <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        required
                    /><br />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Card Name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        required
                    /><br />
                    <input
                        type="date"
                        name="expiry"
                        id="expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    /><br />

                    <input
                        type="number"
                        name="cvc"
                        id="cvc"
                        placeholder="cvc"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        required
                    /><br />

                </form>
                <button disabled={!isEnabled} onClick={this.addNewCard}>Add Card</button>
                <button onClick={this.deleteCard} className="btn btn-danger">Delete</button>

            </div>
        );

    }
}
export default AddCard;