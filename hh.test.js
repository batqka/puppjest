// import {test} from "@jest/globals";

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/watch?v=qwkTOb4d7ek', {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: 'hn.pdf', format: 'a4' });

    await browser.close();
})();

async function case1() {
    const pathToExtension = require('path').join(__dirname, 'ext/extension');
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]});

    await delay(1500);
    let page = await browser.newPage();

    await page.goto('https://members.helium10.com/user/signin');

    let loginfieldElement = await page.$('#loginform-email');
    await loginfieldElement.type('batqka454545@gmail.com');

    let passfieldElement = await page.$('#loginform-password');
    await passfieldElement.type('153258');

    let loginbuttonElement = await page.$('#btn btn-secondary btn-block');
    await loginbuttonElement.click();

    page = await browser.newPage();
    page.goto('https://www.amazon.com/s?k=cpu&ref=nb_sb_noss_2');
}

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}


test('case 1', () => {
    expect(case1());
});