class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 0
        self.health = 100
        self.sound = "meep"

    def sleep(self):
        self.energy+=25
        return self
    def eat(self):
        self.energy+=5
        self.health+=10
        return self
    def play(self):
        self.health+=5
        return self
    def noise(self):
        print(self.sound)
        return self
    def showStats(self):
        print(self.name)
        print('Health:', self.health)
        print('Energy:', self.energy)
