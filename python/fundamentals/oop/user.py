class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.balance = 0
    def make_deposit(self, amount):
        self.balance += amount
        return self
    def make_withdrawl(self, amount):
        self.balance -= amount
        return self
    def display_user_balance(self):
        print(self.balance)
        return self
    def transfer_money(self, user, amount):
        self.balance -= amount
        user.balance += amount
        return self

bob = User('Bob Thorton', 'billy@bob.com')
miria = User('Miria Harvent', 'miria@baccano.com')
hanna = User('Hanna Coleman', 'hcoleman@gmail.com')

bob.make_deposit(20)
bob.make_deposit(20)
bob.make_deposit(20)
bob.make_withdrawl(200)
bob.display_user_balance()

miria.make_deposit(200)
miria.make_deposit(234)
miria.make_withdrawl(35)
miria.make_withdrawl(-1)
miria.display_user_balance()

hanna.make_deposit(-400)
hanna.make_withdrawl(600)
hanna.make_withdrawl(60)
hanna.make_withdrawl(4)
hanna.display_user_balance()

miria.transfer_money(bob, 140)
bob.display_user_balance()
miria.display_user_balance()