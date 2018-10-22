import React from 'react'
import Actions from '../Actions'
import {shallow} from 'enzyme'

describe('Header', () => {
    it('should render the component', () => {
        shallow(<Actions/>)
    })
})
