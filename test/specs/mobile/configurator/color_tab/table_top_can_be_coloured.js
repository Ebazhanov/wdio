const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Colours tab - table top can be coloured', () => {
  let structureBefore;

  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/konfigurator');
  });

  it('Should Open colours tab', () => {
    ConfiguratorPage.coloursTabMobile.waitForVisible();
    ConfiguratorPage.coloursTabMobile.click();
  });

  it('Should Save sku number before changes', () => {
    const skuNumber1 = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.tops.tabletop.sku;
    });
    structureBefore = skuNumber1.value;
  });

  it('Should Select one component into drop down', () => {
    ConfiguratorPage.firstButtonIntoDrawersDropdown.waitForVisible();
    ConfiguratorPage.firstButtonIntoDrawersDropdown.click();
  });

  it('Should Open color options drop down', () => {
    ConfiguratorPage.colorOptionsButton.waitForVisible();
    ConfiguratorPage.colorOptionsButton.click();
  });

  it('Should Select color', () => {
    ConfiguratorPage.walnutColorIntoDropdown.waitForVisible();
    ConfiguratorPage.walnutColorIntoDropdown.click();
  });

  it('Should Click on apply button', () => {
    ConfiguratorPage.applyButton.waitForVisible();
    ConfiguratorPage.applyButton.click();
  });

  it('Should Compare sku numbers between left and right', () => {
    const skuNumberAfter = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.tops.tabletop.sku;
    });
    console.log('CONSOLE OUTPUT SKU NUMBER BEFORE', structureBefore);
    console.log('CONSOLE OUTPUT SKU NUMBER AFTER', skuNumberAfter.value);
    assert(structureBefore !== skuNumberAfter.value);
  });
});
