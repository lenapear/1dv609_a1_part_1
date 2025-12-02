import { jest } from '@jest/globals'
import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
//import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberWrongYear" 



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability
    const fakeHelper = {
    isCorrectLength: jest.fn().mockReturnValue(true),
    isCorrectFormat: jest.fn().mockReturnValue(true),
    isValidMonth: jest.fn().mockReturnValue(true),
    isValidDay: jest.fn().mockReturnValue(true),
    luhnisCorrect: jest.fn().mockReturnValue(true),
    }

    it('getYear should return correct year for valid SSN', () => {
        const sut = new SwedishSocialSecurityNumber('011015-7777', fakeHelper )
        expect(sut.getYear()).toBe('01')
    })
})