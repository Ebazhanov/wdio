const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Legs tab - legs can be changed', () => {
  let typOfLegsBefore;

  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/konfigurator');
  });

  it('Should Click on legs tab in header', () => {
    ConfiguratorPage.legsTabMobile.waitForVisible();
    ConfiguratorPage.legsTabMobile.click();
  });

  it('Should Select a leg type', () => {
    ConfiguratorPage.secondLegTypeButton.waitForVisible();
    ConfiguratorPage.secondLegTypeButton.click();
  });

  it('Should Save type of legs before', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.legs;
    });
    typOfLegsBefore = result.value;
    console.log('CONSOLE OUTPUT AFTER', result.value);
  });

  it('Should Select a leg type', () => {
    ConfiguratorPage.fourthLegTypeButton.waitForVisible();
    ConfiguratorPage.fourthLegTypeButton.click();
  });

  it('Should Compare types of legs BEFORE and AFTER', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.legs;
    });
    console.log('CONSOLE OUTPUT BEFORE', result.value);
    console.log('CONSOLE OUTPUT AFTER', typOfLegsBefore);
    assert.notEqual(typOfLegsBefore, result.value);
  });
});
