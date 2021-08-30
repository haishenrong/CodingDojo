# 1) Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]


x[1][0]=15
print(x)

students[0]['last_name'] = 'Bryant'
print(students)

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

z[0]['y']=30
print(z)
print('\n')
# 2 Iterate Through a List of Dictionaries
def iterateDictionary(some_list):
    for ele in some_list:
        print(f'first_name - {ele["first_name"]}, last_name - {ele["last_name"]}')

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
iterateDictionary(students) 
print('\n')
#3 Get Values From a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    if not key_name in some_list[0]:
        print("Key not in List")
        return
    for ele in some_list:
        print(f'{ele[key_name]}')
iterateDictionary2('last_name', students) 
print('\n')
#4 Iterate Through a Dictionary with List Values
def printInfo(some_dict):
    for key in some_dict:
        print(len(some_dict[key]), key.upper())
        for val in some_dict[key]:
            print(val)
        print('\n')

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)

