import React, { Component } from 'react'
import './App.css';
import { UserApiService } from './service/UserApiService'
import ShuffleService from './service/ShuffleService'
import Header from './header/Header'
import Actions from './header/Actions'
import ListView from './main-content/ListView'
import Dashboard from './main-content/Dashboard'
import Footer from './footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faHandHoldingUsd,
  faArrowRight,
  faExchangeAlt,
  faRandom
} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faHandHoldingUsd, faArrowRight, faExchangeAlt, faRandom);
class App extends Component {
  state = {
    coffeePairings: [],
    employees: [],
    location: null,
    department: null
  }
  // avoid memory leek for ajax call as there is no way to cancel a promise.(https://www.youtube.com/watch?v=8BNdxFzMeVg) 
  _isRequestMounted = true
  componentDidMount() {
    requestUsers.call(this)
  }
  componentWillUnmount() {
    this.setState({ _isRequestMounted: false })
  }
  shuffle = () => {
    try {
      const coffeePairings = ShuffleService.buildGiverReceiver(this.state.employees)
      this.setState({ coffeePairings })
    } catch (error) {
      throw error
    }
  }
  reversePair = () => {
    const newCoffeePairs = ShuffleService.reversePair(this.state.coffeePairings)
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
    if (!Object.keys(coffeePairings)) {
      throw new Error('User data wrong format')
    }
    const pairingLength = Object.keys(coffeePairings).length
    return (
      <div className='wrapper'>
        <Header>
          <Actions onSelectDept={this.selectDepartment}
            onSelectLocation={this.selectLocation}>
          </Actions>
        </Header>
        {displayMainContent(pairingLength, coffeePairings)}
        <Footer
          onReversePair={this.reversePair}
          onShuffle={this.shuffle}
          isReverseVisible={pairingLength > 0}>
        </Footer>
      </div>
    );
  }
}

// private function request users
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

function displayMainContent(pairingLength, coffeePairings) {
  if (pairingLength > 0) {
    return <ListView coffeePairings={coffeePairings}></ListView>
  } else {
    return <Dashboard></Dashboard>
  }
}

export default App;
