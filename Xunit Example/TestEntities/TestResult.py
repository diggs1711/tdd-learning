class TestResult:
    def __init__(self):
        self.runCount = 0
        self.errorCount = 0
        self.setUpErrors = 0

    def testFailed(self):
        self.errorCount = self.errorCount + 1

    def testSetUpFailed(self):
        self.setUpErrors = self.setUpErrors + 1
        self.testFailed()

    def testStarted(self):
        self.runCount = self.runCount + 1

    def summary(self):
        errorReport = "{} run, {} failed".format(self.runCount, self.errorCount)
        if self.setUpErrors > 0:
            return errorReport + ", {} failed in setUp".format(self.setUpErrors)
        return errorReport