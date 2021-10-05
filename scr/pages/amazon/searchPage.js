const webElement = require("../../webElement");
const locators = require("../../selectors/amazon");

class SearchPage {
  constructor(browserPage) {
    this.browserPage = browserPage;
    this.bsrContainer = new webElement(
      this.browserPage,
      locators.BSR_CONTAINER
    );
    this.bsrContainerAsin = new webElement(
      this.browserPage,
      locators.BSR_CONTAINER_ASIN
    );
  }
}

module.exports = SearchPage;
