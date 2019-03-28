exports.config = {
  debug: true,
  port: 4723,
  specs: [
    './test/specs/mobile/*/*/*.js'
  ],
  suites: {
    tests: [
      './test/specs/mobile/configurator/table_top_tab/extensions_can_be_added_and_deleted.js',
      './test/specs/mobile/configurator/color_tab/drawers_color_can_be_changed.spec.js',
      './test/specs/mobile/configurator/color_tab/extension_color_can_be_changed.spec.js',
      './test/specs/mobile/configurator/color_tab/frame_color_can_be_changed.js',
      './test/specs/mobile/configurator/color_tab/legs_color_can_be_changed.js'
    ]
  },
  exclude: [
    './test/specs/mobile/checkout/checkout.spec.js',
    './test/specs/mobile/configurator/color_tab/table_top_can_be_coloured.js',
    './test/specs/mobile/configurator/drawers_tab/add_delete_frames.js',
    './test/specs/mobile/configurator/drawers_tab/drawers_can_be_added_and_deleted.js',
    './test/specs/mobile/configurator/legs_tab/legs_can_be_changed.js',
  ],

  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: { mobileEmulation: { deviceName: 'iPhone 6' } },
      /*      platformName: 'iOS',
      deviceName: 'iPhone 7',
      appiumVersion: '1.6',
      platformVersion: '11.1',
      automationName: 'XCUITest',
      newCommandTimeout: 180,
      autoAcceptAlerts: true,
      safariAllowPopups: true,
      UDID: '123123',
      orientation: 'PORTRAIT',
      noReset: true,
      autoDismissAlerts: true,
      locationServicesEnabled: true,
      launchTimeout: 30000,
      fullReset: false,
      locationServicesAuthorized: true */
    }
  ],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl: 'https://de.mycs.com',
  waitforTimeout: 120000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  deprecationWarnings: true,
  services: [
    'selenium-standalone',
    // 'appium'
  ],
  /*  appium: {
    args: {
      address: '127.0.0.1',
      commandTimeout: '7200',
      sessionOverride: true,
      debugLogSpacing: true,
      platformVersion: '11.1',
      platformName: 'iOS',
      showIosLog: true,
      deviceName: 'iPhone 7',
      nativeInstrumentsLib: true,
      isolateSimDevice: true,
      UDID: '123123',
      automationName: 'XCUITest',
      safariAllowPopups: true,
      noReset: true,
      autoDismissAlerts: true,
      locationServicesEnabled: true,
      launchTimeout: 120000,
      fullReset: false,
      locationServicesAuthorized: true,
      newCommandTimeout: 120000,
      autoAcceptAlerts: true,
      enableAsyncExecuteFromHttps: true
    }
  }, */
  framework: 'mocha',
  reporters: [
    'dot',
    'allure'
  ],
  reporterOptions: {
    allure: {
      outputDir: './allure-results'
    }
  },
  mochaOpts: {
    ui: 'bdd',
    timeout: 9999999
  }
};
