$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Autoportal.feature");
formatter.feature({
  "name": "Car Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validaation of Car features",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username Max and Password Payne",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_username_Max_and_Password_Payne()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"Max\" and password \"Pane\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"Bob\" and password \"Pane\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/DataTabel.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MobileTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters following details",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_following_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters following details",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_following_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.step({
  "name": "User username \u003cname\u003e and password \u003cpasswd\u003e and address \u003caddr\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "passwd",
        "addr"
      ]
    },
    {
      "cells": [
        "Rob",
        "van",
        "Nyc"
      ]
    },
    {
      "cells": [
        "Dev",
        "John",
        "La"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MobileTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User username Rob and password van and address Nyc",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_username_and_password_and_address(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MobileTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User username Dev and password John and address La",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_username_and_password_and_address(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate App Login Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegTest"
    },
    {
      "name": "@MobileTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username Max and Password Payne",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_username_Max_and_Password_Payne()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegTest"
    },
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"Max\" and password \"Pane\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate App Login Functioanlity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MobileTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_is_on_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"Bob\" and password \"Pane\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User redirected to app dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDef.user_redirected_to_app_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});