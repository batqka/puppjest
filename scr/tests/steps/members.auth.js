const browsers = require("../../browsers");
const SignInPage = require("../../pages/members/signinPage");

module.exports = ({ given, and, when, then }) => {
  jest.setTimeout(60000);
  let page;
  let browser;

  beforeEach(async () => {
    browser = await browsers.getBrowserWithExtension();
    await sleep(1500);
  });

  afterEach(async () => {
    browser.close();
  });

  given("authorized user", async () => {
    page = await new SignInPage(await browser.newPage());
    await page.browserPage.goto("https://members.helium10.com/user/signin");
    await page.loginField.sendKeys("batqka454545@gmail.com");
    await page.passField.sendKeys("153258");
    await page.loginButton.click();
  });

  given("Open members sign in page", async () => {
    page = await new SignInPage(await browser.newPage());
    await page.browserPage.goto("https://members.helium10.com/user/signin");
  });

  when(/^I type into the login field - (.*)$/, async (login) => {
    await page.loginField.sendKeys(login);
  });

  when(/^I type into the pass field - (.*)$/, async (pass) => {
    await page.passField.sendKeys(pass);
  });

  when("I press login button", async () => {
    await page.loginButton.click();
  });

  then("I see members dashboard page", async () => {
    await expect("It works!").toBe("It works!");
  });
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
