import React from 'react'
import dashboard from '../logo.png';
import './Dashboard.css'

function ListView(props) {
    return <div className="dashboard">
        <div className='dashboard-text'>
            <p>Coffee Surprise Week!</p>
            <p>Press Shuffle and be happy!</p>
        </div>
        <img src={dashboard} className="dashboard-logo" alt="Dashboard img" />
    </div>
}

export default ListView