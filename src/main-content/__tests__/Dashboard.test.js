import React from 'react'
import Dashboard from '../Dashboard'
import {shallow} from 'enzyme'

describe('ListView', () => {
    it('should render the component', () => {
        shallow(<Dashboard/>)
    })
})
