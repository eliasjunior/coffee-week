import ShuffleService from './ShuffleService'
import {mock} from './data/mock-data'

describe('ShuffleService', () => {
    it('should the newGivers not exist in the old shuffle', () => {
        const newGiverReceiver = ShuffleService.giverBecomeReceiver(mock)

        Object.keys(newGiverReceiver).forEach( key => {
            expect(mock[key]).not.toBeDefined()
        })
    })

    it('the previous giver not receive from the receiver', () => {

        const prevReceivers = Object.entries(mock).reduce((prev, [key, item]) => {
            prev[getFullName(item.receiver)] = getFullName(item.giver)
            return prev
        }, {})

        const newGiverReceiver = ShuffleService.giverBecomeReceiver(mock)

        Object.entries(newGiverReceiver).forEach(([key, item]) => {
            const newGiverName = getFullName(item.giver)
            const newReceiverName = getFullName(item.receiver)
            console.log("NEW giver" , newGiverName, ' -->', newReceiverName)

            expect(prevReceivers[newGiverName]).not.toEqual(newReceiverName) 
        })
    })
})

function getFullName({ name }) {
    return `${name.first}-${name.last}`
}