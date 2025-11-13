# Practice Writing and Running Tests with mocks
The previous task had private methods that normally cannot be tested directly. In this task we have extracted the private methods to a helper class where they are public. The two classes now needs to be tested in a way so that a failing test shows which of the classes that contains the bug. 

Most of the assignment works as the previous practice "run test" but now we have two classes with a dependency. We want to test these classes independently.

SwedishSecurityNumber depends on the class SSNHelper who holds all the validation methods. A test for SwedishSecurityNumber should only test functionality in the SwedishSecurityNumber class and not rely on SSNHelper. To accomplish this we can make use of "mocks". A mock is a configurable class instance that acts as a object of SSNHelper but we can control its output in the test.
Jest have mocking built in while for Java you need to install mockito.


## Goals
* You should be able to test classes with dependencies
* You should be able to write tests with mocks

## Course material to support
* Developer Testing - Chapter 7 - 13
* Testing framework/tool online manuals for your framework/tools
* Mocking framework/tool online manuals for your framework/tools
* Course materials week 1-3

## Task 2: Write an optimized test suite for two classes 


* Write a test suite for SwedishSecurityNumber class and another for the SSNHelper class
A bug in the SwedishSecurityNumber must not fail due to a bug in SSNHelper. 
* None of the tests in SwedishSecurityNumber should use objects of the SSNHelper class.
    * Test the Helper and Password classes independently of each other
        * Tests for Password should only fail if the bug is in Password class
        * Tests for Helper should only fail if the bug is in Helper class
* Only one expect/assert per test
* Show tests and bug fail matrix as in previous task
* Add additional tests to increase coverage, but only if each test has value
  * Show that the additional tests has value by creating a bug that fails that test

* Artifacts to show during examination
  * Table below
  * A test suite for SwedishSecurityNumber that uses mocking and not the SSNHelper class itself
  * A test suite for SSNHelper.
  * A test per buggy version.
  * A set of tests to make sure coverage is high


### Table for checking test suite bug coverage
| SUT | Test | Correct SwedishSocialSecurityNumber | BuggySSNHelperWrongLength | Buggy Helper 2 | ... | |
| --- | ---| --- | --- | --- | --- | --- |
| SwedishSecurityNumber | Test name 1 | ✅ |  |  |  | | 
| SwedishSecurityNumber | Test name 2 | ✅ |  |  |  | | 
| SSNHelper  | Test name 3 |  | ✅ | ❌ |  | | |
| Coverage |  | 100% | 100% | 100% | | |


### Reflection Questions
* What is the purpose of mocks?
* Why is it good if tests are independent of classes that the SUT depends on?
* Should private methods be tested? What are the pros and cons of having a "helper class" instead of private methods?
* Can all bugs be found by testing?
* Can all code be 100 covered by tests?
- Do all test need asserts/expects?
- Can we with testing prove that we are 100% bug free?

