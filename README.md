
E2E selenium tests
==================

This repository contains End to End (E2E) tests written on Node.js and Selenium([WDIO](http://webdriver.io/))

![Node](https://monosnap.com/file/ASoAVdcNHmYhVKygUce29pJoeCAY6d.png)
![Selenium](http://www.seleniumhq.org/images/big-logo.png)
![WDIO](https://monosnap.com/file/YH35ztNllsm5Sjrm0gndrj13vVGzqW.png)


## Installation

- You will need to have Node.js and NPM installed on your machine.

###### WebDriverIO
```
$ npm install webdriverio --save-dev
```

- [Page object model](http://webdriver.io/guide/testrunner/pageobjects.html)
- [API documentation](http://webdriver.io/api.html)
- [Youtube tutorial](https://www.youtube.com/user/medigerati/videos)

- this part is still under construction!


## How To Run

- Run all e2e tests: `npm run test:e2e` or after `git push`
- Run mobile tests: `npm run test:mobile`
- Run web tests: `npm run test:web`


## Where to Run
![Browserstack](https://dgzoq9b5asjg1.cloudfront.net/production/images/layout/BS-logo-color-104x104.png)

[Browserstack](https://www.browserstack.com/automate)
is a cloud-based cross-browser testing tool that enables developers to test their websites across various
browsers on different operating systems and mobile devices, without requiring users to install virtual
machines, devices or emulators.

### Set up credentials
- can be found [here](https://www.browserstack.com/automate/webdriverio)

```
'browserstack.user' : 'xxxxxxxxxxxxx',
'browserstack.key' : 'xxxxxxxxxxxxxxxx'
```

### Select "Desktop" configuration e.g:

- all available configuration [Examples here](https://www.browserstack.com/automate/webdriverio)

![Alt text](https://monosnap.com/file/rWbnnBQRDZq59CllEqbTPW6UawLaxa.png)

```
    capabilities: [{
        'browserName' : 'Safari',
        'browser_version' : '10.0',
        'os' : 'OS X',
        'os_version' : 'Sierra',
        'resolution' : '1280x960',

        project: 'mycs_project',
        build: 'Web testsing',
        name: 'Smoke tests',

        'browserstack.local': false,
        'browserstack.console': 'verbose',
        'browserstack.networkLogs': true,
        'browserstack.video': true,
        'browserstack.timezone': 'UTC',
        'resolution': '1280x1024',
        'browserstack.selenium_version':'3.5.2',
    }],
```

### Select "Mobile" configuration e.g:

- all available devices [here](https://www.browserstack.com/automate/webdriverio)

![Alt text](https://monosnap.com/file/zR2hSMjNj3JvtFogWKawpmVyIkZCo8.png)

```
    capabilities: [{
        browserName: 'Chrome',
        realMobile: true,
        device: 'Samsung Galaxy S8',
        os: 'Android',

        project: 'mycs_project',
        build: 'Mobile tests checkout',

        deviceOrientation: 'portait',
        'browserstack.appium_versio': '1.4.16',
        'browserstack.debug': true
    }],
```

- some more information how to configure framework [here](https://www.browserstack.com/automate/webdriverio)


## Where to find reports after tests run

### Local run
###### 'Spec' report available by default in stack trace

![Alt text](https://monosnap.com/file/6Kw66ErdhWKs3JwYpEg8TnT43UJJ8E.png)

###### 'Allure' report can be generate manually `$ allure serve allure-results`

![Alt text](https://monosnap.com/file/PZeKqojTZwaDKDwkc1pQaxGK4ekZwA.png)

###### 'Browser stack' provide screenshot on failed step, recorded video
just follow the [link](https://www.browserstack.com/automate/builds)

![Alt text](https://monosnap.com/file/l4gGtAGx0tDaZn3gvEYdaKYh1i8bti.png)


### Remote run
![Alt text](http://ahay.org/blog/wp-content/uploads/2016/02/circleci.png)
###### 'Spec' report available by default into 'Artifacts' tab

![Alt text](https://monosnap.com/file/JefJXWq4zVPNBgYnUjqDwLgS18RU0A.png)

###### 'Allure' report: coming soon!

###### Tip

how to run locally with debug mode using WebStorm: [link](http://take.ms/72d97c)
for more details read the articles [link](https://moduscreate.com/blog/debug-protractor-automated-tests-in-webstorm/)