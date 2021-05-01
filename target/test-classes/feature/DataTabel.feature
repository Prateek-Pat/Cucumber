Feature: Login Functionality


@MobileTest
Scenario: Validate App Login Functioanlity
Given User is on login screen
When User enters following details
| Serious | Sam | sam@gmail.com | Nyc | 
Then User redirected to app dashboard

@WebTest
Scenario: Validate App Login Functioanlity
Given User is on login screen
When User enters following details
| Serious | Sam | sam@gmail.com | Nyc | 
| Van     | Dam | van@gmail.com | Swe |
Then User redirected to app dashboard

@MobileTest
Scenario Outline: Validate App Login Functioanlity
Given User is on login screen
When User username <name> and password <passwd> and address <addr>
Then User redirected to app dashboard

Examples:

| name     | passwd | addr |  
| Rob	   | van    | Nyc  |
| Dev      | John   | La   |