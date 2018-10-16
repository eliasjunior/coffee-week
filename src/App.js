import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserApiService } from './service/UserApiService';
import { shuffleservice } from './service/ShuffleService';

class App extends Component {

  componentDidMount() {
    UserApiService
      .getUsers({ department: 'engineering' })
      .then(response => {
       
        // TODO remove here
        const tempPrint = response.users.reduce((acc, {name}) => {
          acc = acc.concat(name.first+'-'+name.last).concat(' === ')
          return acc;
        }, '');
        console.log(tempPrint)

        let employees = response.users

        const giversReceives = shuffleservice.buildGiverReceiver(employees)

        console.log('Result giversReceives', giversReceives)

        console.log('Now reverse givers')

        const newReceivers = shuffleservice.giverBecomeReceiver(giversReceives)

        console.log('*** new Receivers ******', newReceivers)

      }).catch(reason => {
        console.log(reason)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
