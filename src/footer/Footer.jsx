import React from 'react'

function Footer(props) {
    return (
        <div>
            <button onClick={props.onStart}>Surprise!</button>
            <button onClick={props.onReShuffle}>Re Shuffle</button>
        </div>
    )
}
export default Footer;