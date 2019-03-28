exports.config = {
  specs: [
    './test/specs/mobile/configurator/color_tab/*.js'
  ],
  suites: {
    tests: [
      /*      './test/specs/mobile/configurator/table_top_tab/extensions_can_be_added_and_deleted.js',
      './test/specs/mobile/checkout/checkout.spec.js',
      './test/specs/mobile/configurator/color_tab/drawers_color_can_be_changed.spec.js', */
      './test/specs/mobile/configurator/color_tab/extension_color_can_be_changed.spec.js',
      /*      './test/specs/mobile/configurator/color_tab/frame_color_can_be_changed.js',
      './test/specs/mobile/configurator/color_tab/legs_color_can_be_changed.js',
      './test/specs/mobile/configurator/color_tab/table_top_can_be_coloured.js',
      './test/specs/mobile/configurator/drawers_tab/add_delete_frames.js',
      './test/specs/mobile/configurator/drawers_tab/drawers_can_be_added_and_deleted.js',
      './test/specs/mobile/configurator/legs_tab/legs_can_be_changed.js', */
    ]
  },
  exclude: [
    /*    './test/specs/mobile/checkout/checkout.spec.js',
    './test/specs/mobile/configurator/color_tab/drawers_color_can_be_changed.spec.js',
    './test/specs/mobile/configurator/color_tab/extension_color_can_be_changed.spec.js',
    './test/specs/mobile/configurator/color_tab/frame_color_can_be_changed.js',
    './test/specs/mobile/configurator/color_tab/legs_color_can_be_changed.js',
    './test/specs/mobile/configurator/color_tab/table_top_can_be_coloured.js',
    './test/specs/mobile/configurator/drawers_tab/add_delete_frames.js',
    './test/specs/mobile/configurator/drawers_tab/drawers_can_be_added_and_deleted.js',
    './test/specs/mobile/configurator/legs_tab/legs_can_be_changed.js', */
  ],
  maxInstances: 2,
  capabilities: [
    {
      deprecationWarnings: false,
      browserName: 'Chrome',
      realMobile: true,
      device: 'Samsung Galaxy S8',
      os: 'Android',
      project: 'mycs_mobile_project',
      build: 'Android Presentation',
      name: 'Smoke Galaxy S8',
      'browserstack.debug': true,
      'browserstack.networkLogs': true,
      'browserstack.timezone': 'UTC',
      'browserstack.local': false,
      'browserstack.console': 'verbose'
    },
    {
      deprecationWarnings: false,
      browserName: 'Safari',
      realMobile: true,
      device: 'iPhone 7',
      os: 'iOS',
      os_version: '10.0',
      project: 'mycs_mobile_project',
      build: 'iPhone Presentation',
      name: 'Smoke iOS 7',
      'browserstack.debug': true,
      'browserstack.networkLogs': true,
      'browserstack.timezone': 'UTC',
      'browserstack.local': false,
      'browserstack.console': 'verbose',
      deviceOrientation: 'portait',
      autoWebview: 'true',
      nativeWebTap: 'true',
      enableAsyncExecuteFromHttps: true
    }
  ],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://de.mycs.ninja',
  waitforTimeout: 130000,
  connectionRetryTimeout: 130000,
  connectionRetryCount: 3,
  deprecationWarnings: true,
  services: [ 'browserstack' ],
  user: 'evgenybazhanov1',
  key: '3Uds1PkuFUjy7YdRg8ru',
  reporters: [
    'concise',
    'dot',
    'spec',
    'allure'
  ],
  reporterOptions: {
    allure: {
      outputDir: './allure-results'
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 99999999,
    /*        browserStart: 60000,
                scripts: 5000, */
    pageLoad: 60000,
    getPageTimeout: 120000,
    timeout: 60000,
    expectationResultHandler (passed, assertion) {
      if (passed) {
        return;
      }
      browser.saveScreenshot(`./allure-results/assertionError_${ assertion.error.message }.png`);
    }
  }
  /*    onError: function () {
            browser.alertAccept();
        } */
};
