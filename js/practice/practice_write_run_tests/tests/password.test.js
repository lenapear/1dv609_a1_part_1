
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash' //✅
// import { Password } from '../src/BugDoesNotTrim' //✅
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers' //✅
// import { Password } from '../src/BugToShortPassword' //✅
// import { Password } from '../src/BugVeryShort' //✅
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage' //✅
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const tooShortPassword = 'abcde123456'
    const correctMessage = 'Too short password'
    const passwordContainingNumber = 'abcdefgh1234'
    const nonHashedPassword = 'sunooluvr123'

    // fails BugWrongMessage + BugVeryShort, BugToShortPassword, bugNEverContainsNumbers
    it('constructor Should Throw Correct Message for Too Short Password', () => {
        expect(() => new Password(tooShortPassword)).toThrow(correctMessage)
    })

    // failsBugVeryShort & BugToShortPassword
    // to-do

    // fails BugNeverContainsNumbers
    it('constructor Should Not Throw for Password Containing Number', () => {
        expect(() => new Password(passwordContainingNumber)).not.toThrow()
    })

    // fails BugDoesNotHash
    it('password Should Not Equal Input', () => {
        const pwd = new Password(nonHashedPassword)
        expect(pwd.getPasswordHash()).not.toBe(nonHashedPassword)
    })

    // fails BugDoesNotTrim
    it('passwordWithSpace Should Be Equal to passwordWithoutSpace', () => {
        const passwordWithSpace = new Password('sunghoonluvr123 ')
        const passwordWithoutSpace = new Password('sunghoonluvr123')
        expect(passwordWithSpace.isPasswordSame(passwordWithoutSpace)).toBe(true)
    })

})