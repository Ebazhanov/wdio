const page = require('./page');

const productPage = Object.create(page, {
  /**
     * define elements
     */
  addToCartButton: { get: () => browser.element('#configurator-header div:nth-child(3) div:nth-child(2) button span') },
  explanatoryLine: { get: () => browser.element('.explanatory-line') },
  saveButton: { get: () => browser.element('[name="SaveDesignConfigurationButton"] button') },
  emailFieldIntoPopup: { get: () => browser.element('.Popover-body input[name="email"]') },
  submitSaveDesignButtonOnEmailPopup: { get: () => browser.element('.Popover-body form button') },
  /**
     * define or overwrite page methods
     */
  open: {
    value (path) {
      page.open.call(this, path);
    }
  },

  waitForAddToCartButton: {
    value () {
      this.addToCartButton.waitForVisible();
    }
  },

  clickOnAddToCartButton: {
    value () {
      this.addToCartButton.click();
    }
  },

});

module.exports = productPage;
