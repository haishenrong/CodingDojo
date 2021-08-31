class BankAccount:
    all_accounts = []
    def __init__(self, int_rate=0.01, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance>= amount:
            self.balance -= amount
        else:
            print("Insufficient funds, charging a 5 dollar fee.")
            self.balance -= 5 
        return self
    def display_account_info(self):
        print('Balance:', self.balance)
        print('Interest:', self.int_rate)
        return self
    def yield_interest(self):
        self.balance*=(1+self.int_rate) if self.balance>0 else print('Negative money') 
        return self
    @classmethod
    def allAccounts(cls):
        for account in cls.all_accounts:
            account.display_account_info()

'''
bob = BankAccount(0.02, 25)
miria = BankAccount(0.5, -500)

bob.deposit(25).deposit(25).deposit(25).withdraw(-100).yield_interest().display_account_info()
miria.deposit(200).deposit(200).withdraw(50).withdraw(50).withdraw(-200).withdraw(-200).yield_interest().display_account_info()

BankAccount.allAccounts()
'''