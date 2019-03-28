const page = require('./page');

const homePage = Object.create(page, {
  /**
     * define elements
     */
  productBreadcrumb: { get: () => browser.element('[data-track-path="MainMenu{Products}"] a span') },
  productButtonAtTheLeftCorner: { get: () => browser.element('[class*="MobileMainNav__trigger___"] [class*="Button__button__text"]') },
  tableMenuButton: { get: () => browser.element('[class*="MobileMainNav__expanded"] [class*="MenuGroups__group"]:nth-child(4) [class*="CollapsingPanel__headlineButton"]') },
  consoleTableSubMenu: { get: () => browser.element('[href="/tische/konsolentische"]') },
  firstProductInTheGrid: { get: () => browser.element('[class*="ProductsGrid__products"] [class*="ProductsGrid__preview"]:nth-child(1) [class*="MediaPreview__imageLink"]') },
  addToCartButton: { get: () => browser.element('[class*="AddToCartButton__button"]') },
  goToCheckoutButton: { get: () => browser.element('[class*="Cart__header"] [class*="primaryCta"]') }
});
module.exports = homePage;
