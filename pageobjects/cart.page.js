const page = require('./page');

const cartPage = Object.create(page, {
  /**
     * define elements
     */
  goToCheckoutButton: { get: () => browser.element('[class*="Cart__header"] [class*="primaryCta"] [class*="Button__button"]') },
  goToCheckoutButtonLocator() { return browser.element('[class*="Cart__header"] [class*="primaryCta"] [class*="Button__button"]'); },
  /**
     * define or overwrite page methods
     */
  waitForGoToCheckoutButton: {
    value () {
      this.goToCheckoutButton.waitForVisible();
    }
  },

  clickOnGoToCheckoutButton: {
    value () {
      this.goToCheckoutButton.click();
    }
  }
});
module.exports = cartPage;
