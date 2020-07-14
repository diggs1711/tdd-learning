### By the end
- Intro to Python
- Write your own testing framework
- seen a trickier example of TDD

#### Initial to-do list
- invoke test method
- invoke setup first
- invoke teardown after
- invoke teardown even if test fails
- run multiple tests
- report collected results


### Step 1
- Write test
- When class is doing more than one thing, create super class

Summary
- tiny steps
- implement functionality and make it pass by hardwiring it, then generalize by replacing constants

### Step 2
common pattern of tests
- Arrange
- Act
- Assert

Setup() to simplify example test case

### Step 3
- restuctured from flags to logs
- tested and implemented tearDown()

### Step 4
TestResult()
- wrote fake implementation and gradually replaced constants
- wrote another test before implementing method

### Step 5
- make small tests work
- reintroduced large scale test

### Step 6
- wrote a test for TestSuite
- Factored out common setup code

TODO:
<!-- Invoke test method -->
<!-- Invoke setUp first -->
<!-- Invoke tearDown afterward -->
<!-- Invoke tearDown even if the test method fails -->
<!-- Run multiple tests -->
<!-- Report collected results -->
<!-- Log string in WasRun -->
<!-- Report failed tests -->
<!-- Catch and report setUp errors -->
Create TestSuite from a TestCase class