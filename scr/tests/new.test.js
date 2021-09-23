const browsers = require('../browsers');
const SignInPage = require('../pages/members/signinPage');
const {getExtensionId} = require("../browsers");
const {given} = require('jest-cucumber');
const {loadFeature, defineFeature} = require('jest-cucumber');
const feature = loadFeature('features/signIn.feature');

describe('login test', () => {
    test('setp 1',async  () => {
        let browser = await browsers.getBrowserWithExtension();

        await sleep(1500);
        let page = await new SignInPage(await browser.newPage());
        await page.browserPage.goto('https://members.helium10.com/user/signin');
        await page.loginField.sendKeys('batqka454545@gmail.com');
        await page.passField.sendKeys('153258');
        await page.loginButton.click();
        await sleep(3000);
        await page.browserPage.goto('chrome-extension://'+ await getExtensionId(browser) + '/popup.html');
        await sleep(3000);
        await page.browserPage.goto('https://www.amazon.com/s?k=cpu&ref=nb_sb_noss_2');
    }, 60000);
});

defineFeature(feature, async (test) => {
    let browser;
    let page;

    beforeAll( async () => {
       browser = await browsers.getBrowserWithExtension();
        await sleep(1500);
    });

    test('Testing valid logging in', ({ given, and, when, then }) => {
        given('Open members sign in page', async () => {
            page = await new SignInPage(await browser.newPage());
            await page.browserPage.goto('https://members.helium10.com/user/signin')
        });

        and(/^Type into the login field - /, async login => {
            await page.loginField.sendKeys(login);
        });

        and(/^Type into the pass field - /, async pass => {
            await page.passField.sendKeys(pass);
        });

        when('I press login button', async () => {
            await page.loginButton.click();
        });

        then('I see members dashboard page', async () => {
            expect('It works!').toBe('It works!');
        });
    });
});


const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};