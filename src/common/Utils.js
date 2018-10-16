export const Utils = {
    getParameters(filter) {
        if (!filter) {
            return ''
        }
        // this could be tricky, for real apps I'd use an library like lodash to check if it's an object because it's well tested
        if (typeof filter !== 'object' || Array.isArray(filter)) {
            throw new Error("Invalid parameter type")
        }
        const parameters = Object.entries(filter)
            .map(([key, value]) => {
                return key
                    .concat('=')
                    .concat(value)
            })
            .join('&')

        return '?'.concat(parameters);
    },
    getRandomName(employees) {
        //var rand = myArray[Math.floor(Math.random() * myArray.length)];
        const randomIndex = Math.floor(Math.random() * employees.length);

        if(!employees[randomIndex]) {
            console.log('OOOPS ', employees, randomIndex)
        }

        return employees[randomIndex]
    },
    removeNameFromList(fullname, employees) {
        return employees.filter(emp => {
            const filterName = `${emp.name.first}-${emp.name.last}`
            return filterName !== fullname
        })
    },
    removeElementFromMap(removeKey, obj) {
        const temp = Object.entries(obj).reduce((acc, [key, value]) => {
            if (removeKey !== key) {
                acc[key] = value
            }
            return acc;
        }, {})

        // console.log('removeElementFromObj ' + removeKey, temp)
        return temp
    },
   

}