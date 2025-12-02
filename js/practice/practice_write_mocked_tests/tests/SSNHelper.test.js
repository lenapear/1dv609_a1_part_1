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
    it('isValidMonth should return false for invalid month', () => {
        const sut = new SSNHelper()
        const invalidMonth = 0
        expect(sut.isValidMonth(invalidMonth)).toBe(false)
    })

    // fails BuggySSNHelperWrongLength
    it('isCorrectLength should return false for invalid string length', () => {
        const sut = new SSNHelper()
        const invalidStringLength = '20030624-1111'
        expect(sut.isCorrectLength(invalidStringLength)).toBe(false)
    })

    // fails BuggySSNHelperMessyLuhn
    it('luhnisCorrect should return true for valid checksum', () => {
        const sut = new SSNHelper()
        const validChecksum = '123455'
        expect(sut.luhnisCorrect(validChecksum)).toBe(true)
    })
})