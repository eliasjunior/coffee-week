import { Utils } from '../common/Utils';

const ShuffleService = {
    buildGiverReceiver(_employees) {
        let employees = Object.assign([], _employees)
        const result = []
        let temp = 0
        while (employees.length > 0 && temp < 18) {
            const currentEmployee = Utils.getRandomUserAndRemoveIt(employees)

            if (employees.length > 1) {
                const ramdomEmployee = Utils.getRandomUserAndRemoveIt(employees)

                const fullnameRandonEmp = Utils.getFullName(ramdomEmployee);

                result[fullnameRandonEmp] = {
                    'giver': currentEmployee,
                    'receiver': ramdomEmployee
                }
            } else {
                console.error(`List has an ODD length, Missing pairing for ${currentEmployee.name.first}`)
            }
            temp++
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
            const reciverName = Utils.getFullName(receiver)
            const giverName = Utils.getFullName(giver)
            const prevGiver = giverReceiverList[giverName]
            const prevGiverName = prevGiver && Utils.getFullName(prevGiver.giver)

            if (!prevGiverName) {
                throw new Error(`Object is not built correctly, ${giverName} not found`)
            }

            if (reciverName !== prevGiverName) {
                result[reciverName] = {
                    giver,
                    receiver
                }
                // console.log(`${giverName} --> ${Utils.getFullName(receiver)} Pairing`)
                const removeGiverFromList = giv => Utils.getFullName(giv) !== giverName
                const removeReceiverFromList = rec => Utils.getFullName(rec) !== reciverName
                // removes the item with filter, these function below is not worry about performance, 
                // if performance was concern, I'd take another approach
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