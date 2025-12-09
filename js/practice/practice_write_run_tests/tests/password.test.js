
// Select one of the Password versions to test

//import { Password } from '../src/BugDoesNotHash'
//import { Password } from '../src/BugDoesNotTrim'
//import { Password } from '../src/BugisPasswordAlwaysSame'
//import { Password } from '../src/BugMissingNumberCheck'
//import { Password } from '../src/BugMissingPasswordCheck' // ❌
//import { Password } from '../src/BugNeverContainsNumbers' //❌
//import { Password } from '../src/BugToShortPassword' //❌
//import { Password } from '../src/BugVeryShort'
//import { Password } from '../src/BugWrongHashingAlgorithm'
//import { Password } from '../src/BugWrongMessage'
import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const tooShortPassword = 'abcde123'
    const boundaryTooShortPassword = 'abcdefgh123'
    const correctMessage = 'Too short password'
    const passwordContainingNumber = 'abcdefgh1234'
    const nonHashedPassword = 'sunooluvr123'

    // BugWrongMessage
    it('constructor ShouldThrowCorrectMessageForTooShortPassword', () => {
        expect(() => new Password(tooShortPassword)).toThrow(correctMessage)
    })

    // BugVeryShort
    it('constructor ShouldThrowForInvalidPasswordLength ', () => {
        expect(() => new Password(tooShortPassword)).toThrow()
    })

    // BugToShortPassword
    it('constructor ShouldThrowTooShortForPasswordOfLength11', () => {
        expect(() => new Password(boundaryTooShortPassword)).toThrow(correctMessage)
    })

    // BugNeverContainsNumbers
    it('constructor ShouldNotThrowForPasswordContainingNumber', () => {
        expect(() => new Password(passwordContainingNumber)).not.toThrow()
    })

    // BugDoesNotHash
    it('password ShouldNotEqualInput', () => {
        const pwd = new Password(nonHashedPassword)
        expect(pwd.getPasswordHash()).not.toBe(nonHashedPassword)
    })

    // BugWrongHashingAlgorithm
    it('getPasswordHash ShouldReturnExpectedHashForKnownPassword', () => {
        const pwd = new Password('abcdefgh1234')
        expect(pwd.getPasswordHash()).toBe(8061291001638646000)
    })


    // BugDoesNotTrim
    it('constructor ShouldTreatTrimmedAndUntrimmedPasswordAsSame', () => {
        const passwordWithSpace = new Password('sunghoonluvr123 ')
        const passwordWithoutSpace = new Password('sunghoonluvr123')
        expect(passwordWithSpace.isPasswordSame(passwordWithoutSpace)).toBe(true)
    })

    // BugisPasswordAlwaysSame
    it('isPasswordSame ShouldReturnFalseForDifferentPasswords', () => {
        const passwordA = new Password('heeseungluvr123')
        const passwordB = new Password('jongseongluvr123')
        expect(passwordA.isPasswordSame(passwordB)).toBe(false)
    })

    // BugMissingNumberCheck
    it('constructor ShouldThrowForPasswordWithoutNumber', () => {
        const passwordWithoutNumber = 'ilovekimsunoosomuch'
        expect(() => new Password(passwordWithoutNumber)).toThrow()
    })

    // TESTS for higher coverage & not provided bugs
    it('isPasswordSame ShouldThrowInvalidArgumentForInvalid PasswordInput', () => {
        const validPassword = new Password('abcdefgh12345')
        const notAPassword = 'not-a-password-object'
        expect(() => validPassword.isPasswordSame(notAPassword)).toThrow('Invalid argument')
    })
})