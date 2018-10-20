import { Utils } from '../common/Utils';

const ShuffleService = {
    buildGiverReceiver(_employees) {
        try {
            let employees = Object.assign([], _employees)
            const result = []
            while (employees.length > 0) {
                const currentEmployee = Utils.getRandomUserAndRemoveIt(employees)
                console.log(`Size ${employees.length} ${Utils.getNameKey(currentEmployee)}`)

                if (employees.length > 0) {
                    const ramdomEmployee = Utils.getRandomUserAndRemoveIt(employees)
                    console.log(`Size ${employees.length} ${Utils.getNameKey(ramdomEmployee)}`)

                    const fullnameRandonEmp = Utils.getNameKey(ramdomEmployee);

                    result[fullnameRandonEmp] = {
                        'giver': currentEmployee,
                        'receiver': ramdomEmployee
                    }
                } else {
                    console.error(`List has an ODD length, Missing pairing for ${Utils.getNameKey(currentEmployee)}`)
                }
            }
            return result;
        } catch (error) {
            throw error
        }
    },
    giverBecomeReceiver(giverReceiverList) {
        const result = []

        let newReceivers = getNewReceivers(giverReceiverList)
        let newGivers = getNewGivers(giverReceiverList);

        let giver = newGivers[0]
        let receiver = newReceivers[newReceivers.length - 1]
        while (newGivers.length > 0) {
            const reciverName = Utils.getNameKey(receiver)
            const giverName = Utils.getNameKey(giver)
            const prevGiver = giverReceiverList[giverName]
            const prevGiverName = prevGiver && Utils.getNameKey(prevGiver.giver)

            if (!prevGiverName) {
                throw new Error(`Object is not built correctly, ${giverName} not found`)
            }

            if (reciverName !== prevGiverName) {
                result[reciverName] = {
                    giver,
                    receiver
                }
                // console.log(`${giverName} --> ${Utils.getNameKey(receiver)} Pairing`)
                const removeGiverFromList = giv => Utils.getNameKey(giv) !== giverName
                const removeReceiverFromList = rec => Utils.getNameKey(rec) !== reciverName
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