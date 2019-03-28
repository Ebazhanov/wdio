exports.config = {
  debug: true,
  port: 4723,
  specs: [
    './test/specs/mobile/*/*/*.js'
  ],
  suites: {
    tests: [
      './test/specs/mobile/configurator/table_top_tab/extensions_can_be_added_and_deleted.js'
    ]
  },
  exclude: [
    './test/specs/mobile/checkout/checkout.spec.js',
    './test/specs/mobile/configurator/color_tab/drawers_color_can_be_changed.spec.js',
    './test/specs/mobile/configurator/color_tab/extension_color_can_be_changed.spec.js',
    './test/specs/mobile/configurator/color_tab/frame_color_can_be_changed.js',
    './test/specs/mobile/configurator/color_tab/legs_color_can_be_changed.js',
    './test/specs/mobile/configurator/color_tab/table_top_can_be_coloured.js',
    './test/specs/mobile/configurator/drawers_tab/add_delete_frames.js',
    './test/specs/mobile/configurator/drawers_tab/drawers_can_be_added_and_deleted.js',
    './test/specs/mobile/configurator/legs_tab/legs_can_be_changed.js',
  ],

  capabilities: [ {
    maxInstances: 2,
    browserName: 'Chrome',
    deviceName: 'Galaxy S8',
    platformName: 'android',
  } ],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://de.mycs.ninja',
  waitforTimeout: 30000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 3,
  deprecationWarnings: true,
  services: [ 'selenium-standalone', 'appium' ],
  appium: {
    args: {
      address: '127.0.0.1',
      commandTimeout: '7200',
      sessionOverride: true,
      debugLogSpacing: true,
      platformName: 'android',
      showIosLog: true,
      deviceName: 'Galaxy S8',
      nativeInstrumentsLib: true,
      isolateSimDevice: true,
      browserName: 'chrome'
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 999999999,
    expectationResultHandler (passed, assertion) {
      if (passed) return;
      browser.saveScreenshot(`./allure-results/assertionError_${ assertion.error.message }.png`);
    }
  },
};
