import React from 'react'
import AppConstant from '../common/AppConstant'

//TODO pass locations and department as props
function Actions(props) {
    const selectDepartment = () => {
        return AppConstant
            .departmentOptions
            .map(dept => <option key={dept.value} value={dept.value}>{dept.label}</option>)
    }
    const selectLocation = () => {
        return AppConstant
            .locationOptions
            .map(loc => <option key={loc.value}  value={loc.value}>{loc.label}</option>)
    }

    return <div>
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

export default Actions