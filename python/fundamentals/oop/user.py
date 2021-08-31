from bank_account import BankAccount
class User:
    def __init__(self, name, email, accounts):
        self.name = name
        self.email = email
        self.accounts = accounts
    def make_deposit(self, amount):
        self.accounts.deposit(amount)
        return self
    def make_withdrawl(self, amount):
        self.accounts.withdraw(amount)
        return self
    def display_user_balance(self):
        print(self.name)
        self.accounts.display_account_info()
        return self
    def transfer_money(self, user, amount):
        self.accounts.withdraw(amount)
        user.accounts.deposit(amount)
        return self

bob = User('Bob Thorton', 'billy@bob.com', BankAccount(0.02, 25))
miria = User('Miria Harvent', 'miria@baccano.com', BankAccount(0.02, 25))
hanna = User('Hanna Coleman', 'hcoleman@gmail.com', BankAccount(0.02, 25))

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