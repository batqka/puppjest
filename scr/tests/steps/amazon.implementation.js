const browsers = require("../../browsers");
const SearchPage = require("../../pages/amazon/searchPage");
const { givenAuthorizedUser } = require("./shared");

module.exports = ({ given, and, when, then }) => {
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
  });

  when("I open amazon search page", async () => {
    page = await new SearchPage(await browser.newPage());
    await page.browserPage.goto(
      "https://www.amazon.com/s?k=cpu&ref=nb_sb_noss_2"
    );
  });

  then("I see BSR containers near products", async () => {
    let bsrContainers = await page.bsrContainer.findElements();
    let quantity = bsrContainers.length;
    expect(quantity).toBeGreaterThan(1);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    let bsrContainersAsins = await page.bsrContainerAsin.findElements();
    expect(bsrContainersAsins.length).toEqual(quantity);
  });
};
