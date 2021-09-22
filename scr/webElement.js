class WebElement {

    attempts;

    constructor(browserPage, selector, attempts=3){
        this.browserPage = browserPage;
        this.selector = selector;
        this.attempts = attempts;
    }

    async click(options) {
        let count = 0;
        while(true){
            try{
                let element = await this.elementFind();
                await element.click(options);
                break;
            } catch (err){
                console.log('Failed in click try');
                if (++count >= this.attempts) throw err;
            }
        }
    }

    async sendKeys(text) {
        let count = 0;
        while (true) {
            try {
                let element = await this.elementFind();
                await element.type(text);
                break;
            } catch (err) {
                console.log('Failed in typing try');
                if (++count >= this.attempts) throw err;
            }
        }
    }

    async getValue(){
        let count = 0;
        while (true) {
            try {
                let element = await this.elementFind();
                let lol = await element.innerText;
                return lol;
            } catch (err) {
                console.log('Failed in get value try');
                if (++count >= this.attempts) throw err;
            }
        }
    }

    async elementFind() {
        return await this.browserPage.$(this.selector);
    }
}

module.exports = WebElement;