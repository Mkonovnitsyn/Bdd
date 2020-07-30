Feature: Login Page 
	As a As a user I want a login page so that only authentic 
     users will be able to login
     
Scenario: Valid users should be able to login 
	Given a valid user 
	When user goes to the site 
	Then login page should display 
	When user enters valid user name "QATEAM" and password "zenM4R#jO^ag3vAc" 
	Then Dashboard page should display 
	
Scenario Outline: Valid users should be able to login 
	Given a valid user 
	When user goes to the site 
	Then login page should display 
	When user enters valid user name "<username>" and password "<password>" 
	Then Dashboard page should display 
	Examples: 
		| username               | password     |
		| QATEAM  				 | zenM4R#jO^ag3vAc|
		
		
Scenario: Invalid users should not be able to login 
	Given a valid user 
	When user goes to the site 
	Then login page should display 
	When user enters valid user name "QATEAM" and password "zenM4R#jO^ag3vAc" 
	Then Dashboard page should not display 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	