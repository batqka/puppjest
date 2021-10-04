class WebElement {
  attempts;

  constructor(browserPage, selector, attempts = 3) {
    this.browserPage = browserPage;
    this.selector = selector;
    this.attempts = attempts;
    this.isSelectorXpath = this.isItXpath();
  }

  async click(options) {
    let count = 0;
    while (true) {
      try {
        let element = await this.findElement();
        await element.click(options);
        break;
      } catch (err) {
        console.log("Failed in click try");
        if (++count >= this.attempts) throw err;
      }
    }
  }

  async sendKeys(text) {
    let count = 0;
    while (true) {
      try {
        let element = await this.findElement();
        await element.type(text);
        break;
      } catch (err) {
        console.log("Failed in typing try");
        if (++count >= this.attempts) throw err;
      }
    }
  }

  async getChild() {
    let count = 0;
    while (true) {
      try {
        return await this.browserPage.$eval(this.selector, (n) => n.innerHTML);
      } catch (err) {
        console.log("Failed in get value try");
        if (++count >= this.attempts) throw err;
      }
    }
  }

  async getText() {
    let count = 0;
    while (true) {
      try {
        return await this.browserPage.$eval(
          this.selector,
          (n) => n.textContent
        );
      } catch (err) {
        console.log("Failed in get value try");
        if (++count >= this.attempts) throw err;
      }
    }
  }

  async findElement() {
    if (this.isSelectorXpath) {
      return await this.browserPage.$x(this.selector)[1];
    } else {
      return await this.browserPage.$(this.selector);
    }
  }

  async findElements() {
    if (this.isSelectorXpath) {
      return await this.browserPage.$x(this.selector);
    } else {
      return await this.browserPage.$$(this.selector);
    }
  }

  async isExist() {
    let count = 0;
    while (true) {
      try {
        return (await this.findElement()) != null;
      } catch (err) {
        console.log("Failed in get value try");
        if (++count >= this.attempts) throw err;
      }
    }
  }

  isItXpath() {
    return this.selector.startsWith("//");
  }
}

module.exports = WebElement;
