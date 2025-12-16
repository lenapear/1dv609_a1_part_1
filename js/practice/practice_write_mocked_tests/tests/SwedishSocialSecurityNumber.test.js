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
    it('getYear ShouldReturnCorrectYearForValidSSN', () => {
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
    it('constructor ShouldCallisCorrectFormatWithTrimmedSSN', () => {
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
    it('constructor ShouldThrowIfSSNHasIncorrectLuhn', () => {
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
    it('constructor ShouldThrowForSSNWithIncorrectLength', () => {
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

    // TEST for higher coverage & not for provided bugs
    it('constructor ShouldThrowIncorrectFormatForInvalidFormat', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(false),
            isValidMonth: jest.fn(),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn(),  
        }
        const invalidFormat = '0306247777'
        expect(() => new SwedishSocialSecurityNumber(invalidFormat, fakeHelper)).toThrow('Incorrect format, must be: YYMMDD-XXXX')
    })

    it('constructor ShouldThrowInvalidMonthForInvalidMonthFromHelper', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(false),
            isValidDay: jest.fn(),
            luhnisCorrect: jest.fn(),
        }
        const ssn = '991315-1234'

        expect(() => new SwedishSocialSecurityNumber(ssn, fakeHelper)).toThrow('Invalid month in SSN')
    })

    it('constructor shouldThrowInvalidDayForInvalidDayFromHelper', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(false),
            luhnisCorrect: jest.fn(),
        }
        const ssn = '991035-1234'

        expect(() => new SwedishSocialSecurityNumber(ssn, fakeHelper)).toThrow('Invalid day in SSN')
    })

    it('getMonth ShouldReturnMonthFromSsn', () => {
        const fakeHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true),
        }

        const sut = new SwedishSocialSecurityNumber('011015-7777', fakeHelper)

        expect(sut.getMonth()).toBe('10')
        })

    it('getDay ShouldReturnDayFromSsn', () => {
    const fakeHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true),
    }

    const sut = new SwedishSocialSecurityNumber('011015-7777', fakeHelper)

    expect(sut.getDay()).toBe('15')
    })

    it('getSerialNumber ShouldReturnSerialFromSsn', () => {
    const fakeHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true),
    }

    const sut = new SwedishSocialSecurityNumber('011015-7777', fakeHelper)

    expect(sut.getSerialNumber()).toBe('7777')
    })
})