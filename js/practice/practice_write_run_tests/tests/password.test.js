
// Select one of the Password versions to test

//import { Password } from '../src/BugDoesNotHash' //✅
//import { Password } from '../src/BugDoesNotTrim' //✅
//import { Password } from '../src/BugisPasswordAlwaysSame' //✅
//import { Password } from '../src/BugMissingNumberCheck' //✅
//import { Password } from '../src/BugMissingPasswordCheck' // ✅
//import { Password } from '../src/BugNeverContainsNumbers' //✅
//import { Password } from '../src/BugToShortPassword' //✅
//import { Password } from '../src/BugVeryShort' //✅
//import { Password } from '../src/BugWrongHashingAlgorithm'
//import { Password } from '../src/BugWrongMessage' //✅
import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const tooShortPassword = 'abcde123'
    const correctMessage = 'Too short password'
    const passwordContainingNumber = 'abcdefgh1234'
    const nonHashedPassword = 'sunooluvr123'

    // BugWrongMessage, BugMissingPasswordCheck + BugVeryShort, BugToShortPassword, bugNeverContainsNumbers
    it('constructor Should Throw Correct Message for Too Short Password', () => {
        expect(() => new Password(tooShortPassword)).toThrow(correctMessage)
    })

    // BugVeryShort & BugToShortPassword
    it('constructor should Throw for Invalid Password Length ', () => {
        expect(() => new Password(tooShortPassword)).toThrow()
    })

    // BugNeverContainsNumbers
    it('constructor Should Not Throw For Password Containing Number', () => {
        expect(() => new Password(passwordContainingNumber)).not.toThrow()
    })

    // BugDoesNotHash
    it('password Should Not Equal Input', () => {
        const pwd = new Password(nonHashedPassword)
        expect(pwd.getPasswordHash()).not.toBe(nonHashedPassword)
    })

    // BugDoesNotTrim
    it('constructor Should Treat Trimmed And Untrimmed Password As Same', () => {
        const passwordWithSpace = new Password('sunghoonluvr123 ')
        const passwordWithoutSpace = new Password('sunghoonluvr123')
        expect(passwordWithSpace.isPasswordSame(passwordWithoutSpace)).toBe(true)
    })

    // BugisPasswordAlwaysSame
    it('isPasswordSame Should Return False For Different Passwords', () => {
        const passwordA = new Password('heeseungluvr123')
        const passwordB = new Password('jongseongluvr123')
        expect(passwordA.isPasswordSame(passwordB)).toBe(false)
    })

    // BugMissingNumberCheck
    it('constructor Should Throw for Password Without Number', () => {
        const passwordWithoutNumber = 'ilovekimsunoosomuch'
        expect(() => new Password(passwordWithoutNumber)).toThrow()
    })

    // TESTS for higher coverage & not provided bugs
    it('isPasswordSame Should Throw Invalid Argument For Invalid Password Input', () => {
        const validPassword = new Password('abcdefgh12345')
        const notAPassword = 'not-a-password-object'

        expect(() => validPassword.isPasswordSame(notAPassword)).toThrow('Invalid argument')
    })
})