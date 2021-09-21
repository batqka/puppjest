const puppeteer = require('puppeteer');

(async () => {
    const pathToExtension = require('path').join(__dirname, 'ext/extension');
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    });



    setTimeout(()=> browser.close(), 50000)
    // Test the background page as you would any other page.
    //  browser.close();
})();
