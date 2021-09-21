const puppeteer = require('puppeteer');

/**
 * Returns clear browser instance.
 */
async function getBrowser(){
    return await puppeteer.launch({headless: false});
}

/**
 * Returns browser instance with installed Helium10 chrome extension.
 */
async function getBrowserWithExtension() {
    const pathToExtension = 'C:\\Users\\Stillife\\WebstormProjects\\puppeject\\ext\\extension';
    return await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1800,
            height: 1000,
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            isLandscape: false,
        },
        slowMo: 2,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    });
}

module.exports = {getBrowser, getBrowserWithExtension};