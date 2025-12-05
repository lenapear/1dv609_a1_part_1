import { jest } from '@jest/globals'
//import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
//import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberWrongYear' //✅
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim' //✅


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability

    // fails WrongYear
    it('getYear should return correct year for valid SSN', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true),
        }
        const sut = new SwedishSocialSecurityNumber('011015-7777', fakeHelper )
        expect(sut.getYear()).toBe('01')
    })

    // fails NoTrim
    it('constructor should call isCorrectFormat with trimmedSSN', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true),
        }
        const ssnWithWhiteSpace = '990210-8767 '
        const correctSSN = '990210-8767'
        const sut = new SwedishSocialSecurityNumber(ssnWithWhiteSpace, fakeHelper)
        expect(fakeHelper.isCorrectFormat).toHaveBeenCalledWith(correctSSN)
    })
})