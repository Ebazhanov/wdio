const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Colours tab - table top can be coloured', () => {
  let skuNumberBefore;

  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/konfigurator');
  });

  it('Should Open colours tab', () => {
    ConfiguratorPage.coloursTabWeb.waitForVisible();
    ConfiguratorPage.coloursTabWeb.click();
  });

  it('Should Select one component into drop down', () => {
    ConfiguratorPage.firstButtonIntoDrawersDropdown.waitForVisible();
    ConfiguratorPage.firstButtonIntoDrawersDropdown.click();
  });

  it('Should Should save sku number before changes', () => {
    const skuNumber1 = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.tops.tabletop.sku;
    });
    skuNumberBefore = skuNumber1.value;
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
    const skuNumber2 = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.tops.tabletop.sku;
    });
    console.log('CONSOLE OUTPUT SKU NUMBER BEFORE', skuNumberBefore);
    console.log('CONSOLE OUTPUT SKU NUMBER AFTER', skuNumber2.value);
    assert(skuNumberBefore !== skuNumber2.value);
  });
});
