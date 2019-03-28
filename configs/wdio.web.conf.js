exports.config = {

  specs: [
    './test/specs/web/*/*/*.js'
  ],
  suites: {
    tests: [
      './test/specs/web/configurator/table_top_tab/extensions_can_be_added_and_deleted.js'
    ]
  },
  exclude: [
    './test/specs/web/configurator/color_tab/drawers_color_can_be_changed.spec.js',
    './test/specs/web/configurator/color_tab/extension_color_can_be_changed.spec.js',
    './test/specs/web/configurator/color_tab/frame_color_can_be_changed.js',
    './test/specs/web/configurator/color_tab/legs_color_can_be_changed.js',
    './test/specs/web/configurator/color_tab/table_top_can_be_coloured.js',
    './test/specs/web/configurator/drawers_tab/add_delete_frames.js',
    './test/specs/web/configurator/drawers_tab/drawers_can_be_added_and_deleted.js',
    './test/specs/web/configurator/legs_tab/legs_can_be_changed.js',
    './test/specs/web/checkout/checkout.spec.js',
    './test/specs/web/contact_forms/getQuotePopup.js',
    './test/specs/web/events/saveDesignEvents.js',
    './test/specs/web/visual_regression/checkoutWithScreenshots.spec.js'
  ],
  maxInstances: 2,
  capabilities: [
    {
      deprecationWarnings: false,
      browserName: 'Safari',
      browser_version: '10.0',
      os: 'OS X',
      os_version: 'Sierra',
      resolution: '1024x768',
      project: 'mycs_project',
      build: 'Desktop Safari QA-136 aa',
      name: 'Smoke tests',
      'browserstack.local': false,
      'browserstack.console': 'verbose',
      'browserstack.networkLogs': true,
      'browserstack.video': true,
      'browserstack.timezone': 'UTC',
      'browserstack.debug': true,
      deviceOrientation: 'portait',
      autoWebview: 'true',
      nativeWebTap: 'true',
      enableAsyncExecuteFromHttps: true,
      'safari.options': { technologyPreview: true }
    },
    {
      deprecationWarnings: false,
      browserName: 'Chrome',
      browser_version: '62.0',
      os: 'Windows',
      os_version: '10',
      resolution: '1280x800',
      project: 'mycs_project',
      build: 'Desktop Chrome QA-136 aa',
      name: 'Smoke tests',
      'browserstack.local': false,
      'browserstack.console': 'verbose',
      'browserstack.networkLogs': true,
      'browserstack.video': true,
      'browserstack.timezone': 'UTC',
      'browserstack.debug': true
    },
    {
      browserName: 'IE',
      browser_version: '11.0',
      os: 'Windows',
      os_version: '10',
      resolution: '1280x800',
      project: 'mycs_project',
      build: 'IE11 desktop Test',
      name: 'Smoke tests',
      'browserstack.local': false,
      'browserstack.console': 'verbose',
      'browserstack.networkLogs': true,
      'browserstack.video': true,
      'browserstack.timezone': 'UTC',
      'browserstack.selenium_version': '3.5.2'
    }
  ],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://de.mycs.ninja',
  waitforTimeout: 120000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [ 'browserstack' ],
  user: 'evgenybazhanov1',
  key: '3Uds1PkuFUjy7YdRg8ru',
  framework: 'jasmine',
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
};
