def countdown(val=1):
    sol = []
    for i in range(val, 0, -1):
        sol.append(i)
    return sol

print(countdown(5))


def printAndReturn(val=[0,0]):
    print(val[0])
    return val[1]

print(printAndReturn([4,3]))


def firstPlusLength(val = [0,0]):
    return val[0]+len(val)

print(firstPlusLength([4,3]))

def valuesGreaterThanSecond(val = [0,0]):
    if len(val)<2:
        return False
    gate = val[1]
    val2 = val.copy()
    for i in val2:
        if i<=gate:
            val.remove(i)
    print(len(val))
    return(val)
print(valuesGreaterThanSecond([5, 2, 3, 2, 1, 4]))


def lengthAndValue(size=1, value = 1):
    sol=[]
    for idx in range(0, size):
        sol.append(value)
    return sol
print(lengthAndValue(4,7))