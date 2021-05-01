Feature: Login Functionality

#Background:
#Given User is opening browser
#When User entered url in browser
#Then User is landed on website home page

@RegTest @MobileTest
Scenario: Validate App Login Functionality
Given User is on login screen
When User enters username Max and Password Payne
Then User redirected to app dashboard

@RegTest @WebTest
Scenario: Validate App Login Functioanlity
Given User is on login screen
When User enters username "Max" and password "Pane"
Then User redirected to app dashboard

@MobileTest
Scenario: Validate App Login Functioanlity
Given User is on login screen
When User enters username "Bob" and password "Pane"
Then User redirected to app dashboard




