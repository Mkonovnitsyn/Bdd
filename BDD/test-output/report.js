$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "As a As a user I want a login page so that only authentic \n   users will be able to login",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "login-page;valid-users-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user goes to the site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters valid user name \"QATEAM\" and password \"zenM4R#jO^ag3vAc\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "login-page;valid-users-should-be-able-to-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user goes to the site",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "login page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters valid user name \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-page;valid-users-should-be-able-to-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-page;valid-users-should-be-able-to-login;;1"
    },
    {
      "cells": [
        "QATEAM",
        "zenM4R#jO^ag3vAc"
      ],
      "line": 20,
      "id": "login-page;valid-users-should-be-able-to-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "login-page;valid-users-should-be-able-to-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user goes to the site",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "login page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters valid user name \"QATEAM\" and password \"zenM4R#jO^ag3vAc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid users should not be able to login",
  "description": "",
  "id": "login-page;invalid-users-should-not-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user goes to the site",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "login page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user enters valid user name \"QATEAM\" and password \"zenM4R#jO^ag3vAc\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Dashboard page should not display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});