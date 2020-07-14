from TestEntities.TestResult import TestResult
from TestEntities.TestSuite import TestSuite
from TestEntities.TestCaseTests import TestCaseTest

suite = TestSuite(TestCaseTest)
result = TestResult()
suite.run(result)
print(result.summary())