import math

def sigmoid(x):
    return 1/(1+math.exp(-x))

def sigmoid_prime(x):
    return sigmoid(x)*(1-sigmoid(x))

def alpha_decay(x):
    return .99*x