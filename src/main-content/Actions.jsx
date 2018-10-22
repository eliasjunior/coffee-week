import React from 'react'
import PropTypes from 'prop-types'
import AppConstant from '../common/AppConstant'
import './Actions.css'

function Actions(props) {
    const selectDepartment = () => {
        return AppConstant
            .departmentOptions
            .map(dept => <option key={dept.value} value={dept.value}>{dept.label}</option>)
    }
    const selectLocation = () => {
        return AppConstant
            .locationOptions
            .map(loc => <option key={loc.value} value={loc.value}>{loc.label}</option>)
    }

    return <div className='actions-btn'>
        <select onChange={e => props.onSelectDept(e.target.value)}>
            <option value=''>Select Department</option>
            {selectDepartment()}
        </select>
        <select onChange={e => props.onSelectLocation(e.target.value)}>
            <option value=''>Select Location</option>
            {selectLocation()}
        </select>
    </div>
}
Actions.propTypes = {
    onSelectDept: PropTypes.func,
    onSelectLocation: PropTypes.func
}
export default Actions