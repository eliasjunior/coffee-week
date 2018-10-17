import React from 'react';
import { Utils } from '../common/Utils';

function Shuffle(props) {
    console.log('props.coffePairings', props.coffePairings)
    return(
        <ul>
            {Object.entries(props.coffePairings).map( ([key, pair], index) => {
                return <li key={index}>{Utils.getFullName(pair.giver)} - {Utils.getFullName(pair.receiver)} Pairing</li>
            })}
        </ul>
    )
}
export default Shuffle;