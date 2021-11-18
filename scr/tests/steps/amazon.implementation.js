import browsers from "../../browsers";
import SearchPage from "../../pages/amazon/searchPage";
import { givenAuthorizedUser } from "./shared";
import {getExtensionId} from "../../browsers";

module.exports = ({ given, when, then }) => {

    jest.setTimeout(60000);
    let page;
    let browser;
    let cookies;

    beforeAll(async () => {
      const browserBefore = await browsers.getBrowserWithExtension();
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const pageBefore = await givenAuthorizedUser(browserBefore);
      cookies = await pageBefore.browserPage.cookies('https://members.helium10.com/');
      await browserBefore.close();
    })

    beforeEach(async () => {
      browser = await browsers.getBrowserWithExtension();
      await new Promise((resolve) => setTimeout(resolve, 1500));

    });

    afterEach(async () => {
      await browser.close();
    });

    given("authorized user", async () => {
        page = new SearchPage(await browser.newPage());
        await page.browserPage.setCookie(...cookies);
        await page.browserPage.goto(
            "chrome-extension://" + (await getExtensionId(browser)) + "/popup.html"
        );
      await page.extensionLoggedInMark.isExist();

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
