package com.zoo;

public class Gorilla extends Mammal {
	public void throwSomething() {
		setEnergyLevel(getEnergyLevel()-5);
		System.out.println("Throwing something.");
	}
	public void climb() {
		setEnergyLevel(getEnergyLevel()-10);
		System.out.println("Climbing.");
	}
	public void eatBananas() {
		setEnergyLevel(getEnergyLevel()+10);
		System.out.println("Eating Bananas.");
	}
}
