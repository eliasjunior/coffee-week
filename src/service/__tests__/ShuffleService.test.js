import ShuffleService from '../ShuffleService'
import {mock} from '../../data/mock-data'

describe('ShuffleService', () => {
    it('should the newGivers not exist in the old shuffle', () => {
        const newGiverReceiver = ShuffleService.reversePair(mock)

        Object.keys(newGiverReceiver).forEach( key => {
            expect(mock[key]).not.toBeDefined()
        })
    })

    it('the previous giver not receive from the receiver', () => {

        const prevReceivers = Object.entries(mock).reduce((prev, [key, item]) => {
            prev[getNameKey(item.receiver)] = getNameKey(item.giver)
            return prev
        }, {})

        const newGiverReceiver = ShuffleService.reversePair(mock)

        Object.entries(newGiverReceiver).forEach(([key, item]) => {
            const newGiverName = getNameKey(item.giver)
            const newReceiverName = getNameKey(item.receiver)
            expect(prevReceivers[newGiverName]).not.toEqual(newReceiverName) 
        })
    })
})

function getNameKey({ name }) {
    return `${name.first}-${name.last}`
}