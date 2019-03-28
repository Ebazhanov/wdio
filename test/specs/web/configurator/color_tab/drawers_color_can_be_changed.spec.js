const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Colors tab - drawers color can be changed', () => {
  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/Fir7tqo7e?tab=farben');
  });

  it('Should Select one component into drop down', () => {
    ConfiguratorPage.thirdButtonIntoDrawersDropdown.waitForVisible();
    ConfiguratorPage.thirdButtonIntoDrawersDropdown.click();
  });

  it('Should Check sku number BEFORE changes', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.front_drawers.right_drawer.drawer_front.sku;
    });
    console.log('CONSOLE OUTPUT BEFORE', result.value);
    assert.equal(result.value, '301.105.01');
  });

  it('Should Select front right drawer', () => {
    ConfiguratorPage.fontRightDrawerLabelMobile.waitForVisible();
    ConfiguratorPage.fontRightDrawerLabelMobile.leftClick();
  });

  it('Should Click on Colors button to open drop down options', () => {
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
      return JSON.parse(localStorage['mycs.furniture_table']).structure.front_drawers.right_drawer.drawer_front.sku;
    });
    console.log('CONSOLE OUTPUT AFTER', result.value);
    assert.notEqual(result.value, '301.105.01');
  });
});
