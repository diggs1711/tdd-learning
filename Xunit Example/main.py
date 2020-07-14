from TestEntities.TestResult import TestResult
from TestEntities.TestSuite import TestSuite
from TestEntities.TestCaseTests import TestCaseTest

suite = TestSuite()
suite.add(TestCaseTest("testTemplateMethod"))
suite.add(TestCaseTest("testResult"))
suite.add(TestCaseTest("testFailedResultFormatting"))
suite.add(TestCaseTest("testFailedResult"))
suite.add(TestCaseTest("testSuite"))
suite.add(TestCaseTest("testInvokeTearDownAfterTestFail"))
suite.add(TestCaseTest("testFailedInSetup"))

result = TestResult()
suite.run(result)
print(result.summary())