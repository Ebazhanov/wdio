const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Colors tab - extension color can be changed', () => {
  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/zHoBXyi0e?tab=farben');
  });

  it('Should Select one component into drop down', () => {
    ConfiguratorPage.firstButtonIntoDrawersDropdown.waitForVisible();
    ConfiguratorPage.firstButtonIntoDrawersDropdown.click();
  });

  it('Should Check sku number BEFORE changes', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.extensions.left.sku;
    });
    console.log('CONSOLE OUTPUT BEFORE', result.value);
    assert.equal(result.value, '301.104.36');
  });

  it('Should Select right drawer label into configurator', () => {
    ConfiguratorPage.rightDrawerLabelMobile.waitForVisible();
    ConfiguratorPage.rightDrawerLabelMobile.leftClick();
  });

  it('Should Click on Colors button to open drop down with options', () => {
    ConfiguratorPage.colorOptionsButton.waitForVisible();
    ConfiguratorPage.colorOptionsButton.click();
  });

  it('Should Select color', () => {
    ConfiguratorPage.blackColorIntoDropdown.waitForVisible();
    ConfiguratorPage.blackColorIntoDropdown.click();
  });

  it('Should Click on apply button', () => {
    ConfiguratorPage.applyButton.waitForVisible();
    ConfiguratorPage.applyButton.click();
  });

  it('Should Check sku number AFTER changes', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.extensions.left.sku;
    });
    console.log('CONSOLE OUTPUT AFTER', result.value);
    assert.equal(result.value, '301.104.34');
  });
});
