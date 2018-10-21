import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
    const isReverseVisible = props.isReverseVisible;
    const displayReverseBtn = () => {
        return isReverseVisible ?
            <button onClick={props.onReversePair}>
                <FontAwesomeIcon icon="exchange-alt" />
                <span>Reverse Pair</span>
            </button> : false
    }
    return (
        <div className="footer">
            <button onClick={props.onShuffle}>
                <FontAwesomeIcon icon="random" />
                <span>Shuffle</span>
            </button>
            {displayReverseBtn()}
        </div>
    )
}
Footer.propTypes = {
    isReverseVisible: PropTypes.bool,
    onReversePair: PropTypes.func,
    onShuffle: PropTypes.func
}
export default Footer;