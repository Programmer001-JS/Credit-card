import React from 'react'
import CurrentCard from './currentCard';
import EditCard from './editCard';


class App extends React.Component {
  

  render() {
    return (
      <div>
        <CurrentCard />
        <EditCard /><br/>
      </div>
    )
  }
}


export default App
