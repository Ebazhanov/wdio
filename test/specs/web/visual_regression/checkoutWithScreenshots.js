const ProductPage = require('../../../../pageobjects/product.page');
const expect = require('chai').expect;
const BlinkDiff = require('blink-diff');

function expectGoodThings(results) {
  results.forEach((result, idx) => expect(result.isExactSameImage, 'Image isn\'t the same').to.be.true);
}

describe('Checkout web', () => {
  it('Should navigate to konfigurator of selected product', () => {
    ProductPage.open('/regal/konfigurator?tab=masse-und-fuesse?mx-notrack');
    browser.pause(10000);
  });

  it('Shood look good de', () => {
    const report = browser.checkDocument();
    expectGoodThings(report);
  });
});
