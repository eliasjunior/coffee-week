import React from 'react'
import ListView from '../ListView'
import {shallow} from 'enzyme'

describe('ListView', () => {
    it('should render the component', () => {
        shallow(<ListView coffePairings={{'test' : {name: ''}}}/>)
    })
})
