const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Table top tab - extensions can be added and deleted', () => {
  let priceAfter;

  it('Should Navigate to configurator page', () => {
    ProductPage.open('tisch/C-I2cyv6?tab=platten');
  });

  it('Should Click on left extension drawer into configurator', () => {
    ConfiguratorPage.leftExtensionsDrawerButton.waitForVisible();
    ConfiguratorPage.leftExtensionsDrawerButton.leftClick();
  });

  it('Should Select first option into drop down', () => {
    ConfiguratorPage.firstOptionIntoDropDown.waitForVisible();
    ConfiguratorPage.firstOptionIntoDropDown.leftClick();
  });

  it('Should Check presesnce of left sku number', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.extensions;
    });
    console.log('CONSOLE OUTPUT BEFORE', result.value);
    assert(result.value !== null);
  });

  it('Should Save price AFTER changes', () => {
    ConfiguratorPage.priceAtTheLeftCorner.waitForVisible();
    browser.pause(3000); // wait until price will be finally exchanged
    priceAfter = ConfiguratorPage.priceAtTheLeftCorner.getText();
  });

  it('Should Click on left extension drawer into configurator', () => {
    ConfiguratorPage.leftExtensionsDrawerButton.waitForVisible();
    ConfiguratorPage.leftExtensionsDrawerButton.leftClick();
  });

  it('Should Compare price INITIAL and AFTER changes', () => {
    ConfiguratorPage.priceAtTheLeftCorner.waitForVisible();
    const priceInitial = ConfiguratorPage.priceAtTheLeftCorner.getText();
    console.log('CONSOLE OUTPUT PRICE AFTER', priceAfter);
    console.log('CONSOLE OUTPUT PRICE INITIAL', priceInitial);
    browser.pause(3000);
    assert(priceAfter > priceInitial);
  });
});
