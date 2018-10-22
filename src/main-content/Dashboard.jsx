import React from 'react'
import dashboard from '../logo.png';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListView(props) {
    return <div className="dashboard">
        <img src={dashboard} className="dashboard-logo" alt="Dashboard img" />
        <div className='dashboard-text'>
            <p>Hello there </p>
            <p>It's Week Coffee Surprise!</p>
            <p>As coffee lovers we are going to surprise our colleagues with an amazing Coffee!</p>
            <p>Just click in the button {<FontAwesomeIcon icon="random" />} Shuffe and you will see who will give and receive a coffee  </p>
            <p>No Worries, after the shuffle we can click { <FontAwesomeIcon icon="exchange-alt" />} Reverse Pair now the Givers are the Receivers!! Hooray!</p>
        </div>
    </div>
}

export default ListView