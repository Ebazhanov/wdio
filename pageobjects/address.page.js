const page = require('./page');

const addressPage = Object.create(page, {
  /**
     * define elements
     */
  emailField: { get: () => browser.element('[name="customer_email"]') },
  firstNameField: { get: () => browser.element('[name="shipping_first_name"]') },
  surnameNameField: { get: () => browser.element('[name="shipping_last_name"]') },
  birthdayField: { get: () => browser.element('[name="birthday"]') },
  companyNameField: { get: () => browser.element('[name="shipping_company"]') },
  phoneNumberField: { get: () => browser.element('[name="shipping_phone"]') },
  streetField: { get: () => browser.element('[name="shipping_address1"]') },
  houseNumberField: { get: () => browser.element('[name="shipping_address2"]') },
  postField: { get: () => browser.element('[name="shipping_postal_code"]') },
  cityField: { get: () => browser.element('[name="shipping_city"]') },
  titleDropDown: { get: () => browser.element('[name="address_form"] div:nth-child(3) div:nth-child(2) select') },
  continueButton: { get: () => browser.element('[name="address_form"] [type="submit"] span') },
  bankTransferCheckBox: { get: () => browser.element('.fc-form-group #fc-payment-method-purchase-order [for="fc_payment_method_purchase_order"]') },
  nextButton: { get: () => browser.element('#checkout-display #block-continue .btn.pink-button') },
  qtyField: { get: () => browser.element('.col-xs-2.fc-cart__item__col.item__quantity>span') },
  iAcceptTheTermsOfUseCheckBox: { get: () => browser.element('[for="tos_agreement"]') },
  newsLetterCheckBox: { get: () => browser.element('[for="newsletter_subscribe"]') },
  subscribeCheckBox: { get: () => browser.element('#fc-additional-fields .fc-checkout__additional-field--subscribe') },
  submitButton: { get: () => browser.element('.fc-button.fc-button--submit span') },
  goBackToHomePageButton: { get: () => browser.element('#fc-receipt__section--actions .fc-button.fc-button-transparent') },
  orderNotesField: { get: () => browser.element('#Order_Notes') },
  vorkassePaymentMethod: { get: () => browser.element('[src="https://mycs.ninja/files/foxycart/templates/images/banktransfer.png"]') },
  creditKartePaymentMethod: { get: () => browser.element('[src="https://www.paypalobjects.com/webstatic/ppplus/images/cc-logo.png"]') },
  closeKeyboard: { get: () => browser.keys('Tab') },
  /**
     * define or overwrite page methods
     */
  waitForEmailField: {
    value () {
      this.emailField.waitForVisible();
    }
  },

  waitBankTransferCheckBox: {
    value () {
      this.bankTransferCheckBox.waitForVisible();
    }
  },

  waitForiAcceptTheTermsOfUseCheckBoxCheckBox: {
    value () {
      this.iAcceptTheTermsOfUseCheckBox.waitForVisible();
    }
  },

  waitAcceptTheTermsOfUseCheckBoxCheckBox: {
    value () {
      this.iAcceptTheTermsOfUseCheckBox.waitForEnabled();
    }
  },

  waitExistForiAcceptTheTermsOfUseCheckBox: {
    value () {
      this.iAcceptTheTermsOfUseCheckBox.waitForExist();
    }
  },

  waitForGoBackToHomeButton: {
    value () {
      this.goBackToHomePageButton.waitForVisible();
    }
  },

  waitForQtyField: {
    value () {
      this.qtyField.waitForVisible();
    }
  }

});

module.exports = addressPage;
