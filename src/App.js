import React, { Component } from 'react'
import AddCard from './AddCard';
import CurrentCard from './CurrentCard';

class App extends Component {
  state = {
    accounts: [
      {
        number: '2323323232323232',
        name: 'Danilo',
        expiry: '0230',
        cvc: '211',
        focus: '',

      }]
  };

  addNewCardToState = (acc) => {
    let cardCopy = [...this.state.accounts, acc]
    this.setState({
      accounts: cardCopy
    })
  }

   

  render() {
    return (
      <div>
        <CurrentCard accounts={this.state.accounts} />
        <AddCard addNewCardToState={this.addNewCardToState}/>
        
      </div>
    )
  }
}
export default App;