import SignInPage from "../../pages/members/signinPage";
const { getExtensionId } = require("../../browsers");

export const givenAuthorizedUser = async (browser) => {
  let page = await new SignInPage(await browser.newPage());
  await page.browserPage.goto("https://members.helium10.com/user/signin");
  await page.loginField.sendKeys("batqka454545@gmail.com");
  await page.passField.sendKeys("153258");
  await page.loginButton.click();
  await page.welcomeLabel.isExist();
  return page;

};
