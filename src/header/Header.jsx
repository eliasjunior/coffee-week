import React from 'react'
import './header.css'
import Actions from './Actions'

function Header(props) {
    return (
        <div className="header">
            <div>Coffee Week!</div>
            <Actions 
                onSelectDept={props.onSelectDept}
                onSelectLocation={props.onSelectLocation}>
            </Actions>
        </div>
    )
}
export default Header;