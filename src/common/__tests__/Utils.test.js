import { Utils } from "../Utils";

describe('Utils', () => {
    it('should return empty string', () => {
        expect(Utils.getParameters()).toEqual('')
    })
    it('should only accept object', () => {
        expect(() => {
            Utils.getParameters('test')
        }).toThrow()

        expect(() => {
            Utils.getParameters([])
        }).toThrow()
    })
    it('should return url parameter format', () => {
        expect(Utils.getParameters({department: 'engineering'}))
            .toEqual('?department=engineering')

        expect(Utils.getParameters({department: 'engineering', location: 'dub'}))
            .toEqual('?department=engineering&location=dub')    

        expect(Utils.getParameters({department: 'engineering', location: 'dub', email:'elias@gmail.com'}))
            .toEqual('?department=engineering&location=dub&email=elias@gmail.com')        
    })
    it('should build the full name', () => {
        const user = {
            name: {
                first: 'Elias',
                last: 'Junior'
            }
        }
        expect(Utils.getNameKey(user)).toEqual('Elias-Junior')
    })
    it('should get full name to display', () => {
        const user = {
            name: {
                first: 'Elias',
                last: 'Junior'
            }
        }
        expect(Utils.getFullName(user)).toEqual('Elias Junior')
    })
})