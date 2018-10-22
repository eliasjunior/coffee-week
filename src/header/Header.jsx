import React from 'react'
import PropTypes from 'prop-types'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className="header">
            <div className="main-text">
                <FontAwesomeIcon icon="coffee" />
                <span>Coffee Week!</span>
            </div>
        </div>
    )
}
Header.propTypes = {
    onSelectDept: PropTypes.func,
    onSelectLocation: PropTypes.func
}
export default Header