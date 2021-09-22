const browsers = require('../browsers');
const puppeteer = require('puppeteer');
const SignInPage = require('../pages/members/signinPage');
const webElement = require('../webElement');
const {getExtensionId} = require("../browsers");

describe('login test', () => {
    test('setp 1',async  () => {
        let browser = await browsers.getBrowserWithExtension();

        await sleep(1500);
        await getExtensionId(browser);
        let page = await new SignInPage(await browser.newPage());
        await page.browserPage.goto('https://members.helium10.com/user/signin');
        await page.loginField.sendKeys('batqka454545@gmail.com');
        await page.passField.sendKeys('153258');
        // await page.loginButton.click();
        let data = await page.loginButton.getValue();
        await sleep(3000);
        await page.browserPage.goto('chrome-extension://'+ await getExtensionId(browser) + '/popup.html');
        await sleep(3000);
        await page.browserPage.goto('https://www.amazon.com/s?k=cpu&ref=nb_sb_noss_2');
    }, 60000);
});



const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};