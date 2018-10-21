import React from 'react';
import PropTypes from 'prop-types'
import { Utils } from '../common/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListView.css'

function ListView(props) {
    try {
        const listKeyValues = Object.entries(props.coffeePairings);
        return (
            <div className='main-content'>

                {listKeyValues.map(([key, pair]) => {
                    return <div className="line-item" key={key}>
                        <FontAwesomeIcon icon="hand-holding-usd" 
                            color="rgb(203, 247, 192)"
                        />
                        <span>
                            {Utils.getFullName(pair.giver)} <FontAwesomeIcon icon="coffee" /> {Utils.getFullName(pair.receiver)}
                        </span>
                    </div>
                })}
            </div>
        )
    } catch (error) {
        throw new Error(error)
    }
}
ListView.propTypes = {
    coffeePairings: PropTypes.array
}
export default ListView;