const ProductPage = require('../../../../pageobjects/product.page');
const assert = require('assert');

describe('Verify presence of events on save design action', () => {
  it('Should navigate to konfigurator of selected product', () => {
    ProductPage.open('/regal/konfigurator?tab=masse-und-fuesse?mx-notrack');
  });

  it('Should click on Save button to add in favorite', () => {
    ProductPage.saveButton.waitForVisible();
    ProductPage.saveButton.click();
  });

  it('Should enter email into email field', () => {
    ProductPage.emailFieldIntoPopup.waitForVisible();
    ProductPage.emailFieldIntoPopup.setValue('evgeny.bazhanov+test@mycs.com');
  });

  it('Should click on Save design button', () => {
    ProductPage.submitSaveDesignButtonOnEmailPopup.click();
    browser.waitForExist('.Popover-body form button', 30000, true);
  });

  it('Should check presence of loginUserEmail for SavedDesign event', () => {
    const result = browser.execute(() => {
      return window.dataLayer.filter(item => item.loginUserEmail === 'evgeny.bazhanov+test@mycs.com')[0];
    });
    console.log('CONSOLE OUTPUT', result.value);
    assert(result.value);
  });

  it('Should check presence of mycsUserId for SavedDesign event', () => {
    const result = browser.execute(() => {
      return window.dataLayer.filter(item => item.mycsUserId !== null)[0];
    });
    console.log('CONSOLE OUTPUT', result.value);
    assert(result.value);
  });
});
