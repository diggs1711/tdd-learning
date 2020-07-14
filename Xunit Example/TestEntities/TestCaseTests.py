from WasRun.WasRun import WasRun
from WasRun.WasRunFailedSetUp import WasRunFailedSetUp
from TestEntities.TestResult import TestResult
from TestEntities.TestSuite import TestSuite
from TestEntities.TestCase import TestCase

class TestCaseTest(TestCase):

    def setUp(self):
        self.result = TestResult()

    def testResult(self):
        test = WasRun("testMethod")
        test.run(self.result)
        assert ("1 run, 0 failed" == self.result.summary())

    def testTemplateMethod(self):
        test = WasRun("testMethod")
        test.run(self.result)
        assert ("setUp testMethod tearDown " == test.log)

    def testFailedResult(self):
        test = WasRun("testBrokenMethod")
        test.run(self.result)
        assert ("1 run, 1 failed" == self.result.summary())

    def testFailedResultFormatting(self):
        self.result.testStarted()
        self.result.testFailed()
        assert ("1 run, 1 failed" == self.result.summary())

    def testInvokeTearDownAfterTestFail(self):
        test = WasRun("testBrokenMethod")
        test.run(self.result)
        assert("setUp testBrokenMethod tearDown " == test.log)

    def testFailedInSetup(self):
        test = WasRunFailedSetUp('testFailedSetup')
        test.run(self.result)
        assert ("1 run, 1 failed, 1 failed in setUp" == self.result.summary())

    def testSuite(self):
        suite = TestSuite()
        suite.add(WasRun("testMethod"))
        suite.add(WasRun("testBrokenMethod"))
        suite.run(self.result)
        assert("2 run, 1 failed" == self.result.summary())