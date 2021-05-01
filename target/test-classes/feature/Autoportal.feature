Feature: Car Functionality

@WebTest
Scenario: Validaation of Car features
Given User is on login screen
When User enters username Max and Password Payne
Then User redirected to app dashboard

@WebTest
Scenario: Validate App Login Functioanlity
Given User is on login screen
When User enters username "Max" and password "Pane"
Then User redirected to app dashboard

@WebTest
Scenario: Validate App Login Functioanlity
Given User is on login screen
When User enters username "Bob" and password "Pane"
Then User redirected to app dashboard