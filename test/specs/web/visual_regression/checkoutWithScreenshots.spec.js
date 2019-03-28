const ProductPage = require('../../../../pageobjects/product.page');
const BlinkDiff = require('blink-diff');

describe('Checkout web', () => {
  it('Should navigate to konfigurator of selected product', () => {
    ProductPage.open('/regal/konfigurator?tab=masse-und-fuesse?mx-notrack');
  });

  it('Should compare screenshots', () => {
    const image = browser.saveDocumentScreenshot('undefined', './screenshots/documentScreenShotNew/now.jpg');
    const diff = new BlinkDiff({
      imageAPath: './screenshots/documentScreenShot/initial.jpg',
      imageB: image
    });

    console.log(image);


    return diff.run((error, result) => {
      if (error) {
        throw error;
      } else {
        console.log(diff.hasPassed(result.code) ? 'Passed' : 'Failed');
        console.log(`Found${ result.differences } differences.`);
      }
    });
  });
});

/*
function compareScreenshotsFiles(testFilename, sampleFilename) {
    return new Promise((resolve, reject) => {
        pngDiff.outputDiffStream(testFilename, sampleFilename, function (err, outStream, diffMetric) {
            if (err) {
                return reject(err);
            }
            assert.equal(diffMetric, 0, 'Saved screenshot doesn\'t match sample screentshot');
            return resolve();
        });
    });
} */
