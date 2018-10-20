import React from 'react'
import './Footer.css'

function Footer(props) {
    const isReverseVisible = props.isReverseVisible;
    const displayReverse = () => {
        return isReverseVisible ? 
        <button onClick={props.onReShuffle}>Reverse Pair</button> : false
    } 
    return (
        <div className="footer">
            <button onClick={props.onStart}>Shuffle!</button>
            {displayReverse()}
        </div>
    )
}
export default Footer;