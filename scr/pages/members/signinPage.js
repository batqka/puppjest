const webElement = require("../../webElement");
const locators = require("../../selectors/members");

class SignInPage {
  constructor(browserPage) {
    this.browserPage = browserPage;
    this.loginField = new webElement(this.browserPage, locators.LOGIN_FIELD);
    this.passField = new webElement(this.browserPage, locators.PASS_FIELD);
    this.loginButton = new webElement(this.browserPage, locators.LOGIN_BUTTON);
    this.welcomeLabel = new webElement(
      this.browserPage,
      locators.WELCOME_LABEL
    );
    this.extensionLoggedInMark = new webElement(
      this.browserPage,
      locators.EXTENSION_LOGGED_IN_MARK
    );
  }
}

module.exports = SignInPage;
