const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Colors tab - legs color can be changed', () => {
  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/C-I2cyv6?tab=farben');
  });

  it('Should Select one component into drop down', () => {
    ConfiguratorPage.secondButtonIntoDrawersDropdown.waitForVisible();
    ConfiguratorPage.secondButtonIntoDrawersDropdown.click();
  });

  it('Should Open color options drop down', () => {
    ConfiguratorPage.colorOptionsButton.waitForVisible();
    ConfiguratorPage.colorOptionsButton.click();
  });

  it('Should Select color', () => {
    ConfiguratorPage.oakColorIntoDropdown.waitForVisible();
    ConfiguratorPage.oakColorIntoDropdown.click();
  });

  it('Should Select first element into configurator', () => {
    ConfiguratorPage.leftTableLegDrawerLabel.waitForVisible();
    ConfiguratorPage.leftTableLegDrawerLabel.leftClick();
  });

  it('Should Click on apply button', () => {
    ConfiguratorPage.applyButton.waitForVisible();
    ConfiguratorPage.applyButton.click();
  });

  it('Should Compare sku numbers between left and right', () => {
    const skuNumber1 = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.legs.back_right;
    });
    const skuNumber2 = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.legs.back_left;
    });
    console.log('CONSOLE OUTPUT SKU NUMBER 1', skuNumber1.value);
    console.log('CONSOLE OUTPUT SKU NUMBER 2', skuNumber2.value);
    assert.notEqual(skuNumber1.value, skuNumber2.value);
  });
});
