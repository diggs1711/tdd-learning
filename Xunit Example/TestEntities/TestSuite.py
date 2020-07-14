from types import FunctionType
from TestEntities.TestCaseTests import TestCaseTest

class TestSuite:
    def __init__(self, TestClass):
        self.tests = self.getTestMethods(TestClass)

    def getTestMethods(self, TestClass):
        return [TestCaseTest(x) for x, y in TestClass.__dict__.items() if ((type(y) == FunctionType) & (x.startswith("test")))]

    def add(self, test):
        self.tests.append(test)

    def run(self, result):
        for test in self.tests:
            test.run(result)
        return result