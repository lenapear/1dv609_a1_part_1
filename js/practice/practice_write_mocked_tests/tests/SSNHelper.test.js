//import { SSNHelper } from '../src/correct/SSNHelper'
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat' //✅
import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'



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
})