package com.zoo;

public class Bat extends Mammal {
	public Bat() {
		setEnergyLevel(300);
	}
	public void fly() {
		if(checkEnergy(50)) {
			setEnergyLevel(getEnergyLevel()-50);
			System.out.println("Flap. Flap.");
		} else {
			System.out.println("You do not have enough energy.");
		}
	}
	public void eatHuman() {	
		setEnergyLevel(getEnergyLevel()+25);
		System.out.println("Nom. Nom.");
	}
	public void attackTown() {
		if(checkEnergy(100)) {
			setEnergyLevel(getEnergyLevel()-100);
			System.out.println("You're Fired.");
		} else {
			System.out.println("You do not have enough energy.");
		}
	}
	public boolean checkEnergy(int attempt) {
		return getEnergyLevel() >= attempt ? true : false;
	}
}
