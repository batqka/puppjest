const locators = {
  BSR_CONTAINER: '[id^="bsr-"]',
  BSR_CONTAINER_ASIN:
    '//div[contains(@id,"bsr-")]/div[1]/div[2]/div[1]/div[1]/div[contains(text(),"B0")]',
  EXTENSION_LOGGED_IN_MARK:
      '//span[contains(text(),"Browse Amazon Marketplace")]',
};

module.exports = locators;
