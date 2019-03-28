const ProductPage = require('../../../../pageobjects/product.page');

describe('Verify presence of events on save design action', () => {
  it('Should navigate to konfigurator of selected product', () => {
    ProductPage.open('/geschaeftskunden');
  });

  it('Should click on Save button to add in favorite', () => {
    ProductPage.saveButton.waitForVisible();
    ProductPage.saveButton.click();
  });
});
