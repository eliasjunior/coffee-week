import React from 'react';
import { Utils } from '../common/Utils';
import './ListView.css'
import dashboard from '../logo.svg';

function ListView(props) {
    try {
        if(!props.coffeePairings) {
            return ''
        }
        const listKeyValues = Object.entries(props.coffeePairings);
        const displayPage = listKeyValues.length ? 'shufflePairingList' : 'textDashboard'
        return (
            <div className='list-view'>
                {dashBoard[displayPage](listKeyValues)}
            </div>
        )
    } catch (error) {
        throw new Error(error)
    }
}

const dashBoard = {
    textDashboard() {
        return <div >
            <div className="App-header">
                <img src={dashboard} className="App-logo" alt="Dashboard img" />

                <p>Coffee Surprise Week!</p>
                <p>Press Shuffle and chill out!</p>
            </div>
        </div>
    },
    shufflePairingList(listKeyValues) {
        const item = ([key, pair]) => {
            return <div className="line-item" key={key}>
                {Utils.getFullName(pair.giver)} - {Utils.getFullName(pair.receiver)} Pairing
            </div>
        }
        return listKeyValues.map(item)
    }
}

export default ListView;