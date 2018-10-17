export const Utils = {
    getParameters(filter) {
        if (!filter) {
            return ''
        }
        // just basic validation for type
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
    getRandomUserAndRemoveIt(users) {
        const randomIndex = Math.floor(Math.random() * users.length);

        if(!users[randomIndex]) {
            console.log('OOOPS employee not found ', users, randomIndex)
        }

        const userToTake = Object.assign(users[randomIndex]) 
        users.splice(randomIndex, 1);
        return userToTake
    },
    removeElementFromMap(removeKey, obj) {
        const temp = Object.entries(obj).reduce((acc, [key, value]) => {
            if (removeKey !== key) {
                acc[key] = value
            }
            return acc;
        }, {})
        return temp
    },
    getFullName({ name }) {
        return `${name.first}-${name.last}`
    }
}