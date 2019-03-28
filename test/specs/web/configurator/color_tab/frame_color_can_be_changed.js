const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Colors tab - frame color can be changed', () => {
  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/z-s6pHyM?tab=farben');
  });

  it('Should Select one component into drop down', () => {
    ConfiguratorPage.fourthButtonIntoDrawersDropdown.waitForVisible();
    ConfiguratorPage.fourthButtonIntoDrawersDropdown.click();
  });

  it('Should Open color options drop down', () => {
    ConfiguratorPage.colorOptionsButton.waitForVisible();
    ConfiguratorPage.colorOptionsButton.click();
  });

  it('Should Select color', () => {
    ConfiguratorPage.oakColorIntoDropdown.waitForVisible();
    ConfiguratorPage.oakColorIntoDropdown.click();
  });

  it('Should Select drawer label into configurator', () => {
    ConfiguratorPage.leftDrawerLabelMobile.waitForVisible();
    ConfiguratorPage.leftDrawerLabelMobile.leftClick();
  });

  it('Should Click on apply button', () => {
    ConfiguratorPage.applyButton.waitForVisible();
    browser.pause(3000);
    ConfiguratorPage.applyButton.click();
  });

  it('Should Compare sku numbers between LEFT and RIGHT frame', () => {
    const rightFrameSku = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.frames.right;
    });
    const leftFrameSku = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.frames.left;
    });
    console.log('CONSOLE OUTPUT LEFT FRAMES SKU', leftFrameSku.value);
    console.log('CONSOLE OUTPUT RIGHT FRAMES SKU', rightFrameSku.value);
    assert.notEqual(rightFrameSku.value, leftFrameSku.value);
  });
});
