import { Utils } from '../common/Utils';

const ShuffleService = {
    buildGiverReceiver(employees) {
        console.log('** list full size ** ', employees.length)
        const result = []
        
        while (employees.length > 0 ) {
            
            const currentEmployee = employees.shift()
            // const key = `${currentEmployee.name.first}-${currentEmployee.name.last}`
            if (employees.length > 1) {
                const ramdomEmployee = Utils.getRandomName(employees)

                const fullnameRandonEmp = getFullName(ramdomEmployee);
                employees = Utils.removeNameFromList(fullnameRandonEmp, employees)

                const fullnameCurrent = getFullName(currentEmployee)

                console.log(`${fullnameCurrent} --> ${fullnameRandonEmp} Pairing`)

                result[fullnameRandonEmp] = {
                    'giver': currentEmployee,
                    'receiver': ramdomEmployee
                }
            } else {
                console.error(`List has an ODD size, Missing pairing for ${currentEmployee.name.first}`)
                // result[key] = `None`
            }
        }
        return result;
    },
    giverBecomeReceiver(giverReceiverList) {
        const result = []

        let newReceivers = getNewReceivers(giverReceiverList)
        let newGivers = getNewGivers(giverReceiverList);
       
        let giver = newGivers[0]
        let receiver = newReceivers[newReceivers.length - 1]
        while (newGivers.length > 0) {
            const reciverName = getFullName(receiver)
            const giverName = getFullName(giver)
            const prevGiver = giverReceiverList[giverName] 
            const prevGiverName = prevGiver && getFullName(prevGiver.giver)

            if(!prevGiverName) {
                throw new Error(`Object is not built correctly, ${giverName} not found`)
            }

            //  console.log('********',prevGiverName)
            //  console.log('********reciverName',reciverName)

            if (reciverName !== prevGiverName) {
                result[reciverName] = {
                    giver,
                    receiver
                }
                console.log(`${giverName} --> ${getFullName(receiver)} Pairing`)
                const removeGiverFromList = giv => getFullName(giv) !== giverName
                const removeReceiverFromList = rec => getFullName(rec) !== reciverName
                newGivers = newGivers.filter(removeGiverFromList)
                newReceivers = newReceivers.filter(removeReceiverFromList)

                giver = newGivers[0]
                receiver = newReceivers[newReceivers.length - 1]
            } else {
                giver = newGivers[1]
            }
        }
        return result
    }
}

//TODO MOVE to UTILS!! 
function getFullName({ name }) {
    return `${name.first}-${name.last}`
}

// rethink here maybe dont need the receiver in the result
function getNewReceivers(giverReceiverMap) {
    return Object.entries(giverReceiverMap)
        .reduce((prev, [key, item]) => {
            prev.push(item.giver)
            return prev
        }, [])

}
function getNewGivers(giverReceiverMap) {
    return Object.entries(giverReceiverMap)
        .reduce((prev, [key, item]) => {
            prev.push(item.receiver)
            return prev
        }, [])
}

export default ShuffleService