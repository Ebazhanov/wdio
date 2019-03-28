const path = require('path');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');

function getScreenshotName(basePath) {
  return function (context) {
    const type = context.type;
    const testName = context.test.title;
    const browserVersion = parseInt(context.browser.version, 10);
    const browserName = context.browser.name;
    console.log(context.meta.width);
    const browserWidth = context.browser.screenWidth;
    return path.join(basePath, `${ testName }_${ type }_${ browserName }_v${ browserVersion }_${ browserWidth }.png`);
  };
}

exports.config = {
  debug: true,
  plugins: {
    'wdio-screenshot': {}
  },
  specs: [
    './test/specs/mobile/*/*/*.js',
    './test/specs/mobile/*/*.js'
  ],
  suites: {
    tests: [
      './test/specs/mobile/*/*/*.js',
      './test/specs/mobile/*/*.js'
    ]
  },
  exclude: [

    /*    './test/specs/web/visual_regression/checkoutWithScreenshots.js',
    './test/specs/web/configurator/color_tab/checkoutWithScreenshots.spec.js',
    './test/specs/web/configurator/table_top_tab/extensions_can_be_added_and_deleted.js',
    './test/specs/web/configurator/color_tab/drawers_color_can_be_changed.spec.js',
    './test/specs/web/configurator/color_tab/extension_color_can_be_changed.spec.js',
    './test/specs/web/configurator/color_tab/frame_color_can_be_changed.js',
    './test/specs/web/configurator/color_tab/legs_color_can_be_changed.js',
    './test/specs/web/configurator/drawers_tab/add_delete_frames.js',
    './test/specs/web/configurator/drawers_tab/drawers_can_be_added_and_deleted.js',
    './test/specs/web/configurator/legs_tab/legs_can_be_changed.js',

    './test/specs/web/checkout/checkout.spec.js',

    './test/specs/web/contact_forms/getQuotePopup.js',
    './test/specs/web/events/saveDesignEvents.js',
    './test/specs/web/visual_regression/checkoutWithScreenshots.spec.js' */
  ],


  capabilities: [
    {
      maxInstances: 9,
      deprecationWarnings: true,
      browserName: 'chrome',
      chromeOptions: { mobileEmulation: { deviceName: 'iPhone 6' } },
    },

    /*        {
            maxInstances: 1,
            deprecationWarnings: true,
            browserName: 'firefox'
        }, */

    /*        {
            maxInstances: 1,
            browserName: 'safari',
            'safari.options': {
                'resolution': '1900x1200',
                technologyPreview: true,
            }
        } */
  ],
  // sync: true,
  logLevel: 'error',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://fr.mycs.ninja',
  waitforTimeout: 30000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 3,
  // deprecationWarnings: true,
  services: [
    'selenium-standalone',
    'visual-regression'
  ],
  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getScreenshotName(path.join(process.cwd(), 'screenshots/reference')),
      screenshotName: getScreenshotName(path.join(process.cwd(), 'screenshots/screen')),
      diffName: getScreenshotName(path.join(process.cwd(), 'screenshots/diff')),
      misMatchTolerance: 0.01
    }),
    viewportChangePause: 300,
    widths: [ 1280, 900 ],
    orientations: [ 'landscape' ]
  },
  screenshotPath: './errorShots/',
  screenshotOnReject: true,
  framework: 'mocha',
  reporters: [
    'dot',
    'spec',
    'allure',
    // 'junit'
  ],
  reporterOptions: {
    allure: {
      outputDir: './allure-results'
    },
  },
  mochaOpts: {
    ui: 'bdd',
    timeout: 9999999,
    expectationResultHandler (passed, assertion) {
      if (passed) {
        return;
      }
      browser.saveScreenshot(`./allure-results/assertionError_${ assertion.error.message }.png`);
    }
  },

  beforeTest () {
    browser.windowHandleMaximize();
  },

};
