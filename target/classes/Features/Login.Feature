

Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario

#Given User is Already on login page
#When User Title of login page is Free CRM
#Then User enters "naveenk" and "test@123"
#Then User clicks on Login button
#And User is on home page


#With Example Keyword

Scenario Outline: Free CRM Login Test Scenario

Given User is Already on login page
When User Title of login page is Free CRM
Then User enters "<username>" and "<password>"
Then User clicks on Login button
Then User is on home page
Then close the Browser


Examples:
 | username | password |
 | naveenk  | test@123 |
 | tom	    | test456  |

