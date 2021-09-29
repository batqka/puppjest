const webElement = require("../../webElement");
const locators = require("../../selectors/amazon");

class SearchPage {
  browserPage;
  loginField;
  passField;
  loginButton;

  constructor(browserPage) {
    this.browserPage = browserPage;
    this.bsrContainer = new webElement(locators.BSR_CONTAINER);
  }
}

module.exports = SearchPage;
