from functions import sigmoid, sigmoid_prime, alpha_decay
from random import random

# initializes NN with corresponding input variables, hidden nodes, output variables:
# For each weight, w(i,j) = small number including bias weights
def initialize_network(numInputs, numHidden, numOutputs):
    network = []
    hidden_layer = []
    for i in range(numHidden):
        data = { 'weights':[] }
        for i in range(numInputs + 1):
            data['weights'].append(random())
        hidden_layer.append(data)
    network.append(hidden_layer)

    output_layer = []
    for i in range(numOutputs):
        data = { 'weights':[] } 
        for i in range(numHidden + 1):
            data['weights'].append(random())
        output_layer.append(data)
    network.append(output_layer)
    return network

# Activate neuron from inputs 
def activate(weights, inputs):
    last = len(weights)-1
    activation = weights[last] # bias weight
    for i in range(last):
        activation += weights[i] * inputs[i]
    return activation

# Propagate the inputs forward / copy input vector example to nodes of network
def forward_propagate(neural_network, inputs):
    # for each layer l in NN
	for l in neural_network:
		next_input = []
		for node in l:
			activation = activate(node['weights'], inputs)
			node['output'] = sigmoid(activation)
			next_input.append(node['output'])
	return next_input


network = initialize_network(2, 1, 2)
for layer in network:
	print(layer)
row = [1, 0, None]
output = forward_propagate(network, row)
print(output)