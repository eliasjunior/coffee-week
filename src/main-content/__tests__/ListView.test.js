import React from 'react'
import ListView from '../ListView'
import {shallow} from 'enzyme'

describe('ListView', () => {
    it('should render the component', () => {
        const coffeePairings  = {
            'test' : {
                giver: {
                    name: {
                        first: 'Ian',
                        last: 'Eche'
                    }
                }, 
                receiver: {
                    name: {
                        first: 'Dan',
                        last: 'Eche'
                    }
                }
            }
        }
        shallow(<ListView coffeePairings={coffeePairings}/>)
    })
})
