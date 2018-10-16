import { Utils } from '../common/Utils';

export const shuffleservice = {
    buildGiverReceiver(employees) {
        console.log('** list full size ** ', employees.length)
        const result = []

        while (employees.length > 0) {
            const currentEmployee = employees.shift()
            // const key = `${currentEmployee.name.first}-${currentEmployee.name.last}`
            if (employees.length > 1) {
                const ramdomEmployee = Utils.getRandomName(employees)

                const fullname = getFullName(ramdomEmployee);
                employees = Utils.removeNameFromList(fullname, employees)

                console.log(`${currentEmployee.name.first} --> ${ramdomEmployee.name.first} Pairing`)

                //result[key] = fullname
                result.push({
                    'giver': currentEmployee,
                    'receiver': ramdomEmployee
                })

            } else {
                console.error(`List has an ODD size, Missing pairing for ${currentEmployee.name.first}`)
                // result[key] = `None`
            }
        }
        return result;
    },
    giverBecomeReceiver(giverReceiverList) {
        const result = []

        let prevGivers = buildNewListForShuffle(giverReceiverList)
       // let prevReceivers = onlyReceivers(giverReceiverList)

        giverReceiverList.forEach(({ giver, receiver }, index) => {
            //build a list without this element currentKey
            // console.log('giver', item.giver.name)
            // console.log('prevReceiver', prevReceiver.name.first)

            printerTest(prevGivers)

            let excludeNames = {
                giverName: getFullName(giver),
                prevReceiverName: getFullName(receiver),
                nextNameColition: null
            }
            const beforeLastIndex = giverReceiverList.length - 2
            if (index === beforeLastIndex) {
                const nextGiver = giverReceiverList[index + 1].giver
                console.log(getFullName(nextGiver))
                excludeNames.nextNameColition = prevGivers.filter(giv => getFullName(giv) !== getFullName(nextGiver))
                 console.log('nextNameColition '+beforeLastIndex +'->'+index, excludeNames.nextNameColition )
            }
           
            const filterNamesCannotBeReceiver = filterNames(excludeNames, prevGivers)
            const ramdomEmployee = Utils.getRandomName(filterNamesCannotBeReceiver)

            console.log(`${receiver.name.first} --> `)
            
            console.log(` ${ramdomEmployee.name.first} Pairing `)

            result.push({
                'giver': receiver,
                'receiver': ramdomEmployee
            })

            prevGivers = Utils.removeNameFromList(getFullName(ramdomEmployee), prevGivers)
            // console.log('new list for shuffle', employeesForNewShuffle.length)
        })
        return result
    }
}

function getFullName({ name }) {
    return `${name.first}-${name.last}`
}

// rethink here maybe dont need the receiver in the result
function buildNewListForShuffle(giverReceiverMap) {
    const temp = giverReceiverMap
        .reduce((prev, item) => {
            prev.push(item.giver)
            return prev
        }, [])
    return temp
}
function onlyReceivers(giverReceiverMap) {
    const temp = giverReceiverMap
        .reduce((prev, item) => {
            prev.push(item.receiver)
            return prev
        }, [])
    return temp
}

function filterNames({ giverName, prevReceiverName, nextNameColition }, employeesForNewShuffle) {
    //filter here cur key
    return employeesForNewShuffle.filter(employee => {
        const currentName = getFullName(employee)

        const blackListNames = [
            giverName,
            prevReceiverName,
            nextNameColition
        ]
        //console.log(' * * * ' + currentName, blackListNames.find(name => name === currentName) ? false : true)
        return blackListNames.find(name => name === currentName) ? false : true

        // return currentName !== giverName && currentName !== prevReceiverName
    })
}


// TODO delete below

function printerTest(employeesForNewShuffle) {


    const t = employeesForNewShuffle.reduce((acc, item) => {
        acc = acc.concat(getFullName(item)).concat('\n')
        return acc
    }, '\n')
    console.log('LEFT  ----------------  ', t)
    console.log('--------------------')
}