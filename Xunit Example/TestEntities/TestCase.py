from Exceptions.SetUpException import SetUpException

class TestCase:
    def __init__(self, name):
        self.name = name
        self.log = ""

    def run(self, result):
        result.testStarted()

        try:
            self.setUp()
            method = getattr(self, self.name)
            method()
        except SetUpException:
            result.testSetUpFailed()
        except:
            result.testFailed()

        self.tearDown()

    def tearDown(self):
        pass

    def setUp(self):
        pass