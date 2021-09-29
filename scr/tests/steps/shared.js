import SignInPage from "../../pages/members/signinPage";
const { getExtensionId } = require("../../browsers");

export const givenAuthorizedUser = async (browser, page) => {
  page = await new SignInPage(await browser.newPage());
  await page.browserPage.goto("https://members.helium10.com/user/signin");
  await page.loginField.sendKeys("batqka454545@gmail.com");
  await page.passField.sendKeys("153258");
  await page.loginButton.click();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await page.browserPage.goto(
    "chrome-extension://" + (await getExtensionId(browser)) + "/popup.html"
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
};