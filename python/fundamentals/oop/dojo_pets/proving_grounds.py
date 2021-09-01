from ninja import Ninja
from pets import Pet

bob = Ninja('Bob','Terwilliger', ['biscuits', 'sweets'], 'sheep food', Pet('Yin', "sheep", ["baa", "run away"]))
bob.walk()
bob.feed()
bob.bathe()
bob.pet.showStats()