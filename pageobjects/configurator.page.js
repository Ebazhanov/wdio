const page = require('./page');

const configuratorPage = Object.create(page, {
  /**
     * define elements - Desktop
     */
  firstButtonIntoDrawersDropdown: { get: () => browser.element('[class*="DropdownButton__options"] > span:nth-child(1) button') },
  secondButtonIntoDrawersDropdown: { get: () => browser.element('[class*="DropdownButton__options"] > span:nth-child(2) button') },
  thirdButtonIntoDrawersDropdown: { get: () => browser.element('[class*="DropdownButton__options"] > span:nth-child(3) button') },
  fourthButtonIntoDrawersDropdown: { get: () => browser.element('[class*="DropdownButton__options"] > span:nth-child(4) button') },

  colorOptionsButton: { get: () => browser.element('[props*="dropdownColorOptionsProps"] button') },
  blackColorIntoDropdown: { get: () => browser.element('[class^="DropdownButton__options"] span:nth-child(4) button') },
  oakColorIntoDropdown: { get: () => browser.element('[class*="DropdownButton__options"] > span:first-child button') },
  walnutColorIntoDropdown: { get: () => browser.element('[class^="DropdownButton__options"] span:nth-child(3) button') },
  applyButton: { get: () => browser.element('[icon-name="\'configurator/apply\'"] button') },

  drawersTabWeb: { get: () => browser.element('[class^="ConfiguratorHeaderTabs__tab"] button:nth-child(3)') },
  coloursTabWeb: { get: () => browser.element('[class^="ConfiguratorHeaderTabs__tab"] button:nth-child(4)') },
  legsTabWeb: { get: () => browser.element('[class^="ConfiguratorHeaderTabs__tab"] button:nth-child(2)') },

  oneDrawerOptionIntoDropDown: { get: () => browser.element('[class^="LabelDropdown__option"] li:nth-child(1)') },
  frontDrawersAddButton: { get: () => browser.element('[label-id="$.front_drawers"] button') },
  frontDrawersDeleteButton: { get: () => browser.element('[label-id="$.front_drawers"] button') },
  priceAtTheLeftCorner: { get: () => browser.element('[itemprop="offers"] [class^="Price__price"]') },
  leftFrameOnTheTable: { get: () => browser.element('[label-id="$.frames.left"] button') },
  rightFrameOnTheTable: { get: () => browser.element('[label-id="$.frames.right"] button') },
  secondLegTypeButton: { get: () => browser.element('.explanatory-line-table-legs > span:nth-child(3) > react-component > button') },
  fourthLegTypeButton: { get: () => browser.element('.explanatory-line-table-legs > span:nth-child(5) > react-component > button') },
  /**
     * define elements - Mobile
     */
  coloursTabMobile: { get: () => browser.element('[class*="Stepper__stepsContainer"] div:nth-child(4) svg') },
  drawersTabMobile: { get: () => browser.element('[class*="Stepper__stepsContainer"] div:nth-child(3) svg') },
  legsTabMobile: { get: () => browser.element('[class*="Stepper__stepsContainer"] div:nth-child(2) svg') },

  addIconMobile: { get: () => browser.element('.component-overlay__item.ng-scope:nth-child(1)') },
  deleteIconMobile: { get: () => browser.element('.component-overlay__item.ng-scope:nth-child(1)') },
  rightDrawerLabelMobile: { get: () => browser.element('[label-id="$.extensions.left"] button') },
  leftDrawerLabelMobile: { get: () => browser.element('[label-id="$.frames.right"] button') },
  fontRightDrawerLabelMobile: { get: () => browser.element('[label-id="$.front_drawers.right_drawer.drawer_front"]') },
  leftTableLegDrawerLabel: { get: () => browser.element('[label-id="$.legs.front_left"] button') },

  leftExtensionsDrawerButton: { get: () => browser.element('[label-id="$.extensions.left"] button svg') },
  firstOptionIntoDropDown: { get: () => browser.element('[class^="LabelDropdown__option"] li:nth-child(1)') },
});

module.exports = configuratorPage;
