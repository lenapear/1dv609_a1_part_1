import { expect, jest } from '@jest/globals'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLuhn' //✅
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberWrongYear' //✅
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim' //✅
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck' //✅
import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'


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
        new SwedishSocialSecurityNumber(ssnWithWhiteSpace, fakeHelper)
        expect(fakeHelper.isCorrectFormat).toHaveBeenCalledWith(correctSSN)
    })

    // fails NoLuhn
    it('constructor should throw if SSN has incorrect luhn', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(false),
        }
        const incorrectLuhnSSN = '030706-7777'
        expect(() => new SwedishSocialSecurityNumber(incorrectLuhnSSN, fakeHelper)).toThrow("Invalid SSN according to Luhn's algorithm")
    })

    // fails NoLenCheck
    it('', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(false),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true),
        }
        const incorrectLengthSSN = '030706'
        expect(() => new SwedishSocialSecurityNumber(incorrectLengthSSN, fakeHelper)).toThrow("To short, must be 11 characters")
    })

})