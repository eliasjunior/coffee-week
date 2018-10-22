import React from 'react'
import PropTypes from 'prop-types'
//import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({children}) {
    return (
        <div className="header">
            <div className="main-text">
                <FontAwesomeIcon icon="coffee" />
                <span>Coffee Week!</span>
            </div>
            {children}
        </div>
    )
}
Header.propTypes = {
    onSelectDept: PropTypes.func,
    onSelectLocation: PropTypes.func
}
export default Header;