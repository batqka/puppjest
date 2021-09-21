const browsers = require('../browsers');
const puppeteer = require('puppeteer');
const SignInPage = require('../pages/members/signinPage');
const webElement = require('../webElement');

describe('login test', () => {
    test('setp 1',async  () => {
        let browser = await browsers.getBrowserWithExtension();
        let page =  new SignInPage(browser.newPage());

        await sleep(1500);
        await browser.goto('https://members.helium10.com/user/signin');
        await page.loginButton.click();
    });
});



const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};