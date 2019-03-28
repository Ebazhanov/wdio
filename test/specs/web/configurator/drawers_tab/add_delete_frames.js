const ProductPage = require('../../../../../pageobjects/product.page');
const ConfiguratorPage = require('../../../../../pageobjects/configurator.page');
const assert = require('assert');

describe('Drawers tab - add & delete frames', () => {
  it('Should Navigate to configurator page', () => {
    ProductPage.open('/tisch/Fir7tqo7e?tab=schubladen');
  });

  it('Should Select left frame on the table', () => {
    ConfiguratorPage.leftFrameOnTheTable.waitForVisible();
    ConfiguratorPage.leftFrameOnTheTable.leftClick();
  });

  it('Should Select right frame on the table', () => {
    ConfiguratorPage.rightFrameOnTheTable.waitForVisible();
    ConfiguratorPage.rightFrameOnTheTable.leftClick();
  });

  it('Should Check numbers of selected frames', () => {
    const result = browser.execute(() => {
      return Object.keys(JSON.parse(localStorage['mycs.furniture_table']).structure.frames).length;
    });
    console.log('CONSOLE OUTPUT BEFORE', result.value);
    assert.equal(2, result.value);
  });

  it('Should Unselect left frame on the table', () => {
    ConfiguratorPage.leftFrameOnTheTable.waitForVisible();
    ConfiguratorPage.leftFrameOnTheTable.leftClick();
  });

  it('Should Check numbers of selected frames', () => {
    const result = browser.execute(() => {
      return Object.keys(JSON.parse(localStorage['mycs.furniture_table']).structure.frames).length;
    });
    console.log('CONSOLE OUTPUT AFTER', result.value);
    assert.equal(1, result.value);
  });
});
