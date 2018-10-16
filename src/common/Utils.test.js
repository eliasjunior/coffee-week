import { Utils } from "./Utils";

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
    // it('should give a randon name', () => {
    //     const list = [
    //         {first: "Brennon", last: "Breitenberg"},
    //         {first: "Payton", last: "Corwin"},
    //         {first: "Alta", last: "Christiansen"}
    //     ]
    //     const res1 = Utils.getRandomName(list)
    //     const res2 = Utils.getRandomName(list)
    //     const res3 = Utils.getRandomName(list)

    //     expect((res1 !== res2) && (res1 !== res3)).toBe(true)
    // })
})