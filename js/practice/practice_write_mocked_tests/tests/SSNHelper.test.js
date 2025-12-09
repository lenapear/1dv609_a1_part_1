import { SSNHelper } from '../src/correct/SSNHelper'
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat' //✅
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30' //✅
//import { SSNHelper} from '../src/bugs/BuggySSNHelperAllowMonth0' //✅
//import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength' //✅
//import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn' //✅

describe('SSNHelper Tests', () => {

    // fails BuggySSNHelperIncorrectFormat
    it('incorrectSSNFormat should return false for incorrect format input', () => {
        const sut = new SSNHelper()
        const incorrectSSNFormat = '0306247777'
        expect(sut.isCorrectFormat(incorrectSSNFormat)).toBe(false)
    })

    // fails BuggySSNHelperAllowDayUpTo30
    it('isValidDay should return true for days up until 31', () => {
        const sut = new SSNHelper()
        const dayString = '31'
        expect(sut.isValidDay(dayString)).toBe(true)
    })

    // fails BuggySSNHelperAllowMonth0
    it('isValidMonth ShouldReturnFalseForInvalidMonth', () => {
        const sut = new SSNHelper()
        const invalidMonth = 0
        expect(sut.isValidMonth(invalidMonth)).toBe(false)
    })

    it('isValidMonth ShouldReturnTrueForValidMonth', () => {
        const sut = new SSNHelper()
        const validMonth = '05'
        expect(sut.isValidMonth(validMonth)).toBe(true)
    })

    // fails BuggySSNHelperWrongLength
    it('isCorrectLength ShouldReturnFalseForInvalidStringLength', () => {
        const sut = new SSNHelper()
        const invalidStringLength = '20030624-1111'
        expect(sut.isCorrectLength(invalidStringLength)).toBe(false)
    })

    it('isCorrectLength ShouldReturnTrueForValidLength11', () => {
        const sut = new SSNHelper()
        const validLength = '030624-7777'
        expect(sut.isCorrectLength(validLength)).toBe(true)
    })

    // fails BuggySSNHelperMessyLuhn
    it('luhnisCorrect ShouldReturnTrueForValidChecksum', () => {
        const sut = new SSNHelper()
        const validChecksum = '123455'
        expect(sut.luhnisCorrect(validChecksum)).toBe(true)
    })
})