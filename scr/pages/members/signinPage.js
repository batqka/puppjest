const webElement = require('../../webElement');
const locators = require('../../selectors/members');

class SignInPage {

    browserPage;
    loginField;
    passField;
    loginButton;

    constructor(browserPage) {
        this.browserPage = browserPage;
        this.loginField = new webElement(this.browserPage, locators.LOGIN_FIELD);
        this.passField = new webElement(this.browserPage, locators.PASS_FIELD);
        this.loginButton = new webElement(this.browserPage, locators.LOGIN_BUTTON);
    }
}

module.exports = SignInPage;