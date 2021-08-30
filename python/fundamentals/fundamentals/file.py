num1 = 42 #Variable Declaration: number
num2 = 2.3 #Variable Declaration: number
boolean = True #Variable Declaration: Boolean
string = 'Hello World' #Variable Declaration: number
#Variable Declaration: Array of strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] 
#Variable Declaration: Dictionary
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
#Variable Declaration: Tuple
fruit = ('blueberry', 'strawberry', 'banana')
#Prints: tuple
print(type(fruit))
#Prints: Sausage
print(pizza_toppings[1])
#Adds 'Mushrooms' to the end of the Array pizza_toppings
pizza_toppings.append('Mushrooms')
#prints: John
print(person['name'])
#Sets the name of the person to George
person['name'] = 'George'
#Sets the eye_color of the person  to blue
person['eye_color'] = 'blue'
#prints: banana
print(fruit[2])

#prints: It's lower
if num1 > 45:
    print("It's greater")
else:
    print("It's lower")
#prints: Just right!
if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

#prints: 01234
for x in range(5):
    print(x)
#prints: 234
for x in range(2,5):
    print(x)
#prints: 258
for x in range(2,10,3):
    print(x)
#prints: 01234
x = 0
while(x < 5):
    print(x)
    x += 1

# removes mushrooms from pizza_toppings
pizza_toppings.pop()
# removes sausage from pizza_toppings
pizza_toppings.pop(1)

# prints: {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
print(person)
# removes the entry for eye_color
person.pop('eye_color')
# prints: {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
print(person)

# prints: After 1st if statement 4 times.
for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

# declares a method print_hello_ten_times
def print_hello_ten_times():
    for num in range(10):
        print('Hello')
# prints: HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
print_hello_ten_times()

# declares a method print_hello_x_times with a parameter x
def print_hello_x_times(x):
    for num in range(x):
        print('Hello')
# prints: HelloHelloHelloHello
print_hello_x_times(4)

# declares a method print_hello_x_or_ten_times with a parameter preset to x
def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')
# prints: HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
# prints: HelloHelloHelloHello
print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)