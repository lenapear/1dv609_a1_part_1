//import { SSNHelper } from '../src/correct/SSNHelper'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat' //✅



describe('SSNHelper Tests', () => {

    // fails BuggySSNHelperIncorrectFormat
    test('incorrectSSNFormat should return false for incorrect format input', () => {
        const sut = new SSNHelper()
        const incorrectSSNFormat = '0306247777'
        expect(sut.isCorrectFormat(incorrectSSNFormat)).toBe(false);
    });

    //Add your tests here
});