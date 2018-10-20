import React, { Component } from 'react';
import './App.css';
import { UserApiService } from './service/UserApiService';
import ShuffleService from './service/ShuffleService';
import Header from './header/Header'
import ListView from './shuffle/ListView'
import Footer from './footer/Footer'

class App extends Component {
  state = {
    coffeePairings: [],
    employees: [],
    location: null,
    department: null
  }
  // avoid memory leek
  _isRequestMounted = false
  componentDidMount() {
    requestUsers.call(this)
  }
  componentWillUnmount() {
    this.setState({ _isRequestMounted: true })
  }
  startShuffle = () => {
    try {
      const coffeePairings = ShuffleService.buildGiverReceiver(this.state.employees)
      this.setState({ coffeePairings })
    } catch (error) {
      throw error
    }
  }
  reShuffle = () => {
    const newCoffeePairs = ShuffleService.giverBecomeReceiver(this.state.coffeePairings)
    this.setState({ coffeePairings: newCoffeePairs })
  }
  selectDepartment = (value) => {
    const department = { department: value }
    this.setState(department)
    const filters = {
      location: this.state.location,
      department: value
    }
    requestUsers.call(this, filters)
  }
  selectLocation = (value) => {
    const location = { location: value }
    const filters = {
      location: value,
      department: this.state.department
    }
    this.setState(location)
    requestUsers.call(this, filters)
  }
  render() {
    const {
      coffeePairings
    } = this.state
    const pairingLength = Object.keys(coffeePairings).length
    return (
      <div className='wrapper'>
        <Header
          onSelectDept={this.selectDepartment}
          onSelectLocation={this.selectLocation}>
        </Header>
        <ListView coffeePairings={coffeePairings}></ListView>
        <Footer
          onReShuffle={this.reShuffle}
          onStart={this.startShuffle}
          isReverseVisible={pairingLength > 0}>
        </Footer>
      </div>
    );
  }
}

async function requestUsers(options) {
  try {
    const response = await UserApiService.getUsers(options)
    if (this._isRequestMounted) {
      const employees = response.users
      this.setState({ employees })
    }
  } catch (error) {
    throw new Error(error)
  }
}
export default App;
