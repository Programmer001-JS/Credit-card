import React, { Component } from 'react'


class EditCard extends Component {

    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
    }
    

    render() {
        return (
            <div className="editCard">
                <h1>Edit card</h1>
                <form>
                    <input
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY Expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />


          ...
        </form>
            </div>
        )
    }
}
export default EditCard;