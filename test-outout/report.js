$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/2017/SELENIUM_PROJECTS/SeleniumProjects/Selenium_PilotProject_Calsoft/FreeCrmBDDFramework/src/main/java/Features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is Already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters naveenk and test@123",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefiination.User_Already_on_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginstepdefiination.User_Title_login_page_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Loginstepdefiination.User_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginstepdefiination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
});