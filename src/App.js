import React from 'react'
import CurrentCard from './currentCard';
import EditCard from './editCard';
import AddCard from "./addCard"



class App extends React.Component {
  state = {
    accounts: [
      {
        number: '3345678890084632',
        name: 'danilo',
        expiry: '2234',
        cvc: '432',
        focus: '',

      }
    ]
  }
  addNewCardToState = (acc) => {
    this.setState({
      accounts: [...this.state.accounts, acc]
    })
  }
  render() {
    return (
      <div>
        <CurrentCard accountsCard={this.state.accounts} />
        <EditCard /><br />
        <AddCard addNewCardToState={this.addNewCardToState} />

      </div>
    )
  }
}


export default App
