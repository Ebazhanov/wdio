const page = require('./page');

const contactFormPopupPage = Object.create(page, {
  /**
     * define elements
     */
  businessRequestButton: { get () { return browser.element('[class*="Button__primaryCtaFallback"]:nth-child(2)'); } },

  open: { value(path) {
    page.open.call(this, path);
  } },

});
module.exports = contactFormPopupPage;
