from TestEntities.TestCase import TestCase
from Exceptions.SetUpException import SetUpException

class WasRunFailedSetUp(TestCase):
    def __init__(self, name):
        TestCase.__init__(self, name)

    def setUp(self):
        self.wasRun = None
        self.log = "setUp "
        raise SetUpException

    def testFailedSetup(self):
        pass