# Assignment 1 part 1. For passing grade E-D

This assignment consists of three parts
 * A practice part for writing and running automated test suites and measure coverage.
 * A second practice part for writing tests with a mocking framework
 * An oral exam that you book in a spreadsheet (see slack for link)

Note that the practice parts are mandatory for passing grade but that we examine YOUR knowledge and not only the code. You also need to be able to during oral examination write a unit test for a code given to you during examination without AI-support. You are supposed to use a suitable assert/expect so you need to study your framwork.

This means it is essential that you practice writing tests yourself, and not only copy, or generate a solution to the practice tasks. 


Each practice task is designed to let you learn what you need to pass the examination.


## Practice tasks:
Find the code and practice tasks here
https://github.com/dntoll/1dv609_a1_part_1

![fork](fork.png)
 * [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repo on GitHub 
 * [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repo to your own computer. 
 * You can make the fork private if you want. This is not really submitted to anyone.  
 * Follow the instructions in the two Markdown files in the root directory.
   * Start with this: Practice_ write_run_tests.md 
   * Continue with this: Practice_write_mocked_tests.md
 * Select Java or .js versions and check their instructions (README.md in each folder)
 * Dont forget to answer the reflection questions in the bottom of this file. You may discuss these with other students.
 * Ask questions in Slack!

## Examination 

Examinations are booked in a spreadsheet given in a pinned Slack-post. 
 * You may only book one session. A session can be more than one slot (see below)
   * Each slot is 15 minutes
   * For A1 p1 book one slot a 15 minutes
   * For A1 p2 (higher grade) book two sequential slots ( 30minutes )
   * Students with written permission can book up double amount of sequential slots
* Notify course management if we run out of slots!

If time runs out before a passing grade can be set, a Fail is recorded.

Prepare: 
* Disable AI in your editor for the examination. No tab to complete.
* Be prepared to show the results of the two practice tasks.
* Be prepared to run the tests, to measure coverage, and use mocking.
* Be prepared to edit and write code.
* Be prepared to answer questions about any part of your code.
* During examination you will write one or more unit test for new a function that you will be given during examination. You should be able to write unit-tests for that function, run the test, measure coverage. You should be able to select "assert/expect method" depending on the type of function to one of the suitable used in practice tasks. 
* During the examination you are also asked a couple of questions related to the practice task and the study material specified.
* You are not allowed to use AI to solve the task during the examination. You may look at the practice tasks during this examination.
* You will also be asked questions from the list below.



### Reflection Questions

During Examination you may be asked these or related questions. You should be able to answer these questions in depth. 

- How many tests are needed to find all bugs in the examples? Do you think this is enough testing for these problems? Too much?
- What are the missing tests you think would be good to add? 
- What is **good test data** for this example and why?
* Should private methods be tested? What are the pros and cons of having a "helper class" instead of private methods?
- Can all code be covered by code coverage? Why not? 
- What kind of "asserts"/"expects" can be done in your testing framework?
- What kind(s) of Code Coverage is shown in your code coverage tool? What does the different coverage values mean?
- Why should a single test only have one assert/expect?
* What is the two main purposes of using mocks?
* Why is it good if a test for a SUT is independent of the classes that the SUT depends on?
* Can all bugs be found by testing?
- Do all tests need asserts/expects?
- Can we with testing prove that we are 100% bug free?