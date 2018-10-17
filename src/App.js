import React, { Component } from 'react';
import './App.css';
import { UserApiService } from './service/UserApiService';
import ShuffleService from './service/ShuffleService';
import Header from './header/Header'
import Shuffle from './shuffle/Shuffle'
import Footer from './footer/Footer'
class App extends Component {
  state = {
    coffeePairings: [],
    employees: []
  }
  componentDidMount() {
    UserApiService
      .getUsers({ department: 'engineering' })
      .then(response => {
        const employees = response.users
        this.setState({employees})
      }).catch(reason => {
        console.error(reason)
      })
  }
  startShuffle = () => {
    const coffeePairings = ShuffleService.buildGiverReceiver(this.state.employees)
    this.setState({coffeePairings})
  }
  reShuffle = () => {
    console.log('Now reverse givers')
    const newCoffeePairs = ShuffleService.giverBecomeReceiver(this.state.coffeePairings)
    this.setState({coffeePairings: newCoffeePairs})
    console.log('*** new Receivers ******', newCoffeePairs)
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Shuffle coffePairings={this.state.coffeePairings}></Shuffle>
        <Footer onReShuffle={this.reShuffle} onStart={this.startShuffle}></Footer>
      </div>
     
    );
  }
}

export default App;
