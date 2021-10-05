const browsers = require("../../browsers");
const SearchPage = require("../../pages/amazon/searchPage");
const { givenAuthorizedUser } = require("./shared");

module.exports = ({ given, when, then }) => {
  jest.setTimeout(60000);
  let page;
  let browser;

  beforeEach(async () => {
    browser = await browsers.getBrowserWithExtension();
    await new Promise((resolve) => setTimeout(resolve, 1500));
  });

  afterEach(async () => {
    browser.close();
  });

  given("authorized user", async () => {
    await givenAuthorizedUser(browser, page);
    page = await new SearchPage(await browser.newPage());
  });

  when("I open amazon search page", async () => {
    await page.browserPage.goto(
      "https://www.amazon.com/s?k=shirt&ref=nb_sb_noss_1"
    );
  });

  then("I see BSR containers near products", async () => {
    let bsrContainers = await page.bsrContainer.findElements();
    let quantity = bsrContainers.length;
    expect(quantity).toBeGreaterThan(1);

    let bsrContainersAsins = await page.bsrContainerAsin.findElements();
    expect(bsrContainersAsins.length).toEqual(quantity);
  });
};
