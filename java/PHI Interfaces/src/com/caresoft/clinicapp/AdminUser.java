package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;


public class AdminUser extends User implements PHICompliantUser, PHIAdminCompliant {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    public AdminUser(Integer employeeID, String role, ArrayList<String> securityIncidents) {
		super();
		this.employeeID = employeeID;
		this.role = role;
		this.securityIncidents = securityIncidents;
	}
	public AdminUser(Integer id, Integer employeeID, int pin, String role) {
    	this.id = id;
    	this.employeeID = employeeID;
    	this.pin = pin;
    	this.role = role;
    	securityIncidents = new ArrayList<>();
    }
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		return securityIncidents;
	}
	
	public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

	@Override
	public boolean assignPin(int pin) {
		if(pin<100000)
			return false;
		setPin(pin);
		return true;
	}

	@Override
	public boolean isAuthorized(Integer confirmedAuthID) {
		boolean auth = confirmedAuthID == id ? true : false;
		if(auth)
			return true;
		authIncident();
		return false;
	}
	
	//Getters and Setters
	public Integer getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}


}
