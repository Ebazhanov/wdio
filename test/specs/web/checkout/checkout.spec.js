const ProductPage = require('../../../../pageobjects/product.page');
const CartPage = require('../../../../pageobjects/cart.page');
const AddressPage = require('../../../../pageobjects/address.page');

describe('Checkout web', () => {
  it('Should navigate to konfigurator of selected product', () => {
    ProductPage.open('/regal/konfigurator?tab=masse-und-fuesse?mx-notrack');
  });

  it('Should click on Add to Cart button', () => {
    ProductPage.waitForAddToCartButton();
    ProductPage.clickOnAddToCartButton();
  });

  it('Should click on Go to Checkout button', () => {
    CartPage.waitForGoToCheckoutButton();
    CartPage.clickOnGoToCheckoutButton();
  });

  it('Should fill in all the field on Address page', () => {
    AddressPage.waitForEmailField();
    AddressPage.emailField.setValue('evgeny.bazhanov+test@mycs.com');
    AddressPage.titleDropDown.selectByVisibleText('Frau');
    AddressPage.firstNameField.setValue('_vorname');
    AddressPage.surnameNameField.setValue('_nachname');
    AddressPage.birthdayField.setValue('1999/02/02');
    AddressPage.companyNameField.setValue('_firma');
    AddressPage.phoneNumberField.setValue('435 2435423 254234');
    AddressPage.streetField.setValue('Strasse test');
    AddressPage.houseNumberField.setValue('Haus nummer test');
    AddressPage.postField.setValue('09876');
    AddressPage.cityField.setValue('Stadt test');
  });

  it('Should click on Continue button', () => {
    AddressPage.continueButton.click();
    AddressPage.waitBankTransferCheckBox();
  });

  it('Should Select payment method then click on next button', () => {
    AddressPage.bankTransferCheckBox.click();
    AddressPage.nextButton.click();
    AddressPage.waitForQtyField();
  });

  it('Should select check box I accept the terms of use', () => {
    AddressPage.submitButton.scroll(1051, 1738);
    AddressPage.submitButton.waitForVisible();
    AddressPage.iAcceptTheTermsOfUseCheckBox.click();
    AddressPage.subscribeCheckBox.click();
  });

  it('Should click on submit button', () => {
    AddressPage.submitButton.click();
  });

  it('Should navigate to Home page', () => {
    AddressPage.waitForGoBackToHomeButton();
    AddressPage.goBackToHomePageButton.click();
  });
});
