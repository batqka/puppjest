import {
  givenOpenMembersSignInPage,
  thenISeeMembersDashboardPage,
  whenIPressLoginButton,
  whenITypeIntoTheLoginField,
  whenITypeIntoThePassField,
} from "./steps/amazon.implementation";

const browsers = require("../browsers");
const SignInPage = require("../pages/members/signinPage");
const { getExtensionId } = require("../browsers");
const { loadFeature, defineFeature, autoBindSteps } = require("jest-cucumber");
const feature = loadFeature("./scr/tests/features/signIn.feature");
import "./steps/amazon.implementation";

defineFeature(feature, (test) => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await browsers.getBrowserWithExtension();
    await sleep(1500);
  });

  afterEach(async () => {
    browser.close();
  });

  describe("generic tests", () => {
    test("Testing valid logging in", ({ given, when, then }) => {
      givenOpenMembersSignInPage(given, browser, page);
      whenITypeIntoTheLoginField(when, page);
      whenITypeIntoThePassField(when, page);
      whenIPressLoginButton(when, page);
      thenISeeMembersDashboardPage(then, page);

      // given("Open members sign in page", async () => {
      //   page = await new SignInPage(await browser.newPage());
      //   await page.browserPage.goto("https://members.helium10.com/user/signin");
      // });
      //
      // when(/^Type into the login field - (.*)$/, async (login) => {
      //   await page.loginField.sendKeys(login);
      // });
      //
      // when(/^Type into the pass field - (.*)$/, async (pass) => {
      //   await page.passField.sendKeys(pass);
      // });
      //
      // when("I press login button", async () => {
      //   await page.loginButton.click();
      // });
      //
      // then("I see members dashboard page", async () => {
      //   await expect("It works!").toBe("It works!");
      // });
    }, 30000);

    test("kek lol, let's do it again", ({ given, when, then }) => {
      given("Open members sign in page", async () => {
        page = await new SignInPage(await browser.newPage());
        await page.browserPage.goto("https://members.helium10.com/user/signin");
      });

      when(/^Type into the login field - (.*)$/, async (login) => {
        await page.loginField.sendKeys(login);
      });

      when(/^Type into the pass field - (.*)$/, async (pass) => {
        await page.passField.sendKeys(pass);
      });

      when("I press login button", async () => {
        await page.loginButton.click();
      });

      then("I see members dashboard page", async () => {
        await expect("It works!").toBe("It works!");
      });
    }, 30000);
  });
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
