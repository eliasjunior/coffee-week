import React, { Component } from 'react'
import './App.css';
import { UserApiService } from './service/UserApiService'
import ShuffleService from './service/ShuffleService'
import Header from './header/Header'
import Actions from './main-content/Actions'
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
import ErrorBoundary from './error-handler/ErrorBoundary';

library.add(faCoffee, faHandHoldingUsd, faArrowRight, faExchangeAlt, faRandom);
class App extends Component {
  state = {
    coffeePairings: [],
    employees: [],
    location: null,
    department: null,
    isReverseVisible: false,
    validationError: null,
  }
  // avoid memory leek for ajax call as there is no way to cancel a promise.(https://www.youtube.com/watch?v=8BNdxFzMeVg) 
  _isRequestMounted = true
  componentDidMount() {
    if (this._isRequestMounted) {
      requestUsers.call(this)
    }
    this._isRequestMounted = true
  }
  componentWillUnmount() {
    this._isRequestMounted = false
  }
  shuffle = () => {
    try {
      const coffeePairings = ShuffleService.buildGiverReceiver(this.state.employees)
      this.setState({
        coffeePairings,
        isReverseVisible: true,
        validationError: null
      })
    } catch (error) {
      this.setState({ validationError: error })
    }
  }
  reversePair = () => {
    try {
      const newCoffeePairs = ShuffleService.reversePair(this.state.coffeePairings)
      this.setState({
        coffeePairings: newCoffeePairs,
        isReverseVisible: false,
        validationError: null
      })
    } catch (error) {
      this.setState({ validationError: error })
    }
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

  displayMainContent = () => {
    const {
      coffeePairings
    } = this.state
    const pairingLength = Object.keys(coffeePairings).length
    if (pairingLength > 0) {
      return <ListView coffeePairings={coffeePairings}>
        <Actions onSelectDept={this.selectDepartment}
          onSelectLocation={this.selectLocation}>
        </Actions>
      </ListView>
    } else {
      return <Dashboard></Dashboard>
    }
  }
  validationMessage = () => {
    // need some style in this message
    return this.state.validationError &&
      <div className='validation-message'>{this.state.validationError.message}</div>
  }
  render() {
    const {
      coffeePairings,
      isReverseVisible
    } = this.state
    if (!Object.keys(coffeePairings)) {
      throw new Error('User data wrong format')
    }
    return (
      <div className='wrapper'>
        <ErrorBoundary>
          <Header />
          {this.validationMessage()}
          {this.displayMainContent()}
          <Footer
            onReversePair={this.reversePair}
            onShuffle={this.shuffle}
            isReverseVisible={isReverseVisible}>
          </Footer>
        </ErrorBoundary>
      </div>
    );
  }
}
// private function request users
async function requestUsers(options) {
  try {
    const response = await UserApiService.getUsers(options)
    const employees = response.users
    this.setState({ employees })
  } catch (error) {
    throw new Error(error)
  }
}


export default App;
