const webElement = require("../../webElement");
const locators = require("../../selectors/amazon");

class SearchPage {
  constructor(browserPage) {
    this.browserPage = browserPage;
    this.bsrContainer = new webElement(
        browserPage,
      locators.BSR_CONTAINER
    );
    this.bsrContainerAsin = new webElement(
        browserPage,
      locators.BSR_CONTAINER_ASIN
    );
    this.extensionLoggedInMark = new webElement(
        browserPage,
        locators.EXTENSION_LOGGED_IN_MARK
    );
  }}

module.exports = SearchPage;
