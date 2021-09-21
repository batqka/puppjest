class WebElement {

    constructor(browserPage, selector){
        this.browserPage = browserPage;
        this.selector = selector;
    }

    async click() {
        let element = await this.elementFind();
        await element.click();
    }

    async sendKeys(text) {
        let element = await this.elementFind();
        await element.type(text);
    }

    async elementFind() {
        /// add attempts
        try {
            return await this.browserPage.$(this.selector);
        } catch (err) {
            console.log('Error on element finding')
        }
    }
}

module.exports = WebElement;