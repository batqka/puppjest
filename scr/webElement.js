class WebElement {

    constructor(browserPage, selector){
        this.browserPage = browserPage;
        this.selector = selector;
    }

    async click() {
        let element = await this.elementFind();
        element.click();
    }

    async sendKeys(text) {
        let element = await this.elementFind();
        element.type(text);
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