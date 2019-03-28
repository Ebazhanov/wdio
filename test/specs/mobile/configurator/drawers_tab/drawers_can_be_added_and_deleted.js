const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');
const expect = require('chai').expect;

describe('Drawers tab - drawers can be added and deleted', () => {
  let priceAfter;

  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/konfigurator');
  });

  it('Should Open drawers tab', () => {
    ConfiguratorPage.drawersTabMobile.waitForVisible();
    ConfiguratorPage.drawersTabMobile.click();
  });

  it('Should Click on Front drawers Add button into configurator', () => {
    ConfiguratorPage.frontDrawersAddButton.waitForVisible();
    ConfiguratorPage.frontDrawersAddButton.leftClick();
  });

  it('Should Select one drawer from drop down', () => {
    ConfiguratorPage.oneDrawerOptionIntoDropDown.waitForVisible();
    ConfiguratorPage.oneDrawerOptionIntoDropDown.click();
  });

  it('Should Check presence drawers AFTER changes', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.front_drawers;
    });
    console.log('CONSOLE OUTPUT AFTER', result.value);
    expect(result.value === true);
  });

  it('Should Save price AFTER changes', () => {
    ConfiguratorPage.priceAtTheLeftCorner.waitForVisible();
    browser.pause(3000);
    priceAfter = ConfiguratorPage.priceAtTheLeftCorner.getText();
  });

  it('Should Click on front Drawers Delete button into Configurator', () => {
    ConfiguratorPage.frontDrawersDeleteButton.waitForVisible();
    ConfiguratorPage.frontDrawersDeleteButton.leftClick();
  });

  it('Should Compare price INITIAL and AFTER changes', () => {
    ConfiguratorPage.priceAtTheLeftCorner.waitForVisible();
    const priceInitial = ConfiguratorPage.priceAtTheLeftCorner.getText();
    console.log('CONSOLE OUTPUT PRICE AFTER', priceAfter);
    console.log('CONSOLE OUTPUT PRICE INITIAL', priceInitial);
    browser.pause(3000);
    assert(priceAfter > priceInitial);
  });

  it('Should Check presence drawers INITIAL changes', () => {
    const result = browser.execute(() => {
      return JSON.parse(localStorage['mycs.furniture_table']).structure.front_drawers;
    });
    console.log('CONSOLE OUTPUT INITIAL', result.value);
    expect(result.value !== true);
  });
});
