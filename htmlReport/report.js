$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/binjalraval/IdeaProjects/BDD/src/test/resources/Features/registration.feature");
formatter.feature({
  "line": 1,
  "name": "nopcommerce Registration",
  "description": "",
  "id": "nopcommerce-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User Register",
  "description": "",
  "id": "nopcommerce-registration;user-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter URL",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefination.user_open_the_browser()"
});
formatter.result({
  "duration": 12731232793,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefination.user_enter_URL()"
});
formatter.result({
  "duration": 1104299471,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefination.user_on_the_home_page()"
});
formatter.result({
  "duration": 113557898,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".class\\\u003d\\\"ico\\-register\\\"\"}\n  (Session info: chrome\u003d110.0.5481.100)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.8.0\u0027, revision: \u0027267030adea\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6a752d61c8969ead98253affacc11f1d, findElement {using\u003dclass name, value\u003dclass\u003d\"ico-register\"}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.100, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: /var/folders/5y/z7t3vn4n63g...}, goog:chromeOptions: {debuggerAddress: localhost:60685}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:60685/devtoo..., se:cdpVersion: 110.0.5481.100, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6a752d61c8969ead98253affacc11f1d\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat StepDefination.RegisterStepDefination.user_on_the_home_page(RegisterStepDefination.java:31)\n\tat ✽.Then User on the home page(/Users/binjalraval/IdeaProjects/BDD/src/test/resources/Features/registration.feature:5)\n",
  "status": "failed"
});
});