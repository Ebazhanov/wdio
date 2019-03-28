const ProductPage = require('../../../../pageobjects/product.page');
const CartPage = require('../../../../pageobjects/cart.page');
const AddressPage = require('../../../../pageobjects/address.page');

describe('Checkout mobile', () => {
  it('Should navigate to tish konfigurator', () => {
    ProductPage.open('/warenkorb?uuid=piBPYYuAj');
  });

  it('Should click on Go to checkOut button', () => {
    CartPage.goToCheckoutButton.waitForVisible();
    CartPage.goToCheckoutButton.click();
  });

  it('Should fill in all the field on Address page', () => {
    AddressPage.waitForEmailField();
    AddressPage.emailField.setValue('evgeny.bazhanov+test@mycs.com');
    AddressPage.titleDropDown.selectByVisibleText('Frau');
    AddressPage.firstNameField.setValue('First name');
    AddressPage.surnameNameField.setValue('Surename');
    AddressPage.birthdayField.setValue('1999/02/02');
    AddressPage.companyNameField.setValue('Company Name');
    AddressPage.phoneNumberField.setValue('43524354232');
    AddressPage.streetField.setValue('Street');
    AddressPage.houseNumberField.setValue('23');
    AddressPage.postField.setValue('12345');
    AddressPage.cityField.setValue('City');
  });

  it('Should click on Continue button', () => {
    browser.keys('Tab');
    browser.keys('Tab');
    AddressPage.continueButton.waitForVisible();
    AddressPage.continueButton.click();
  });

  it('Should Select payment method', () => {
    AddressPage.bankTransferCheckBox.waitForVisible();
    AddressPage.bankTransferCheckBox.click();
  });

  it('Should Click on next button', () => {
    browser.keys('PageDown');
    AddressPage.nextButton.waitForVisible();
    AddressPage.nextButton.click();
  });

  it('Should select check box I accept the terms of use', () => {
    browser.scroll('.fc-button.fc-button--submit span');
    browser.keys('PageDown');
    AddressPage.submitButton.waitForVisible();
    AddressPage.iAcceptTheTermsOfUseCheckBox.click();
    AddressPage.subscribeCheckBox.click();
  });

  it('Should click on submit button2', () => {
    AddressPage.submitButton.waitForVisible();
    AddressPage.submitButton.click();
  });

  it('Should navigate to Home page', () => {
    AddressPage.waitForGoBackToHomeButton();
    AddressPage.goBackToHomePageButton.click();
  });
});
