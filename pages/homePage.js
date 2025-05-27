const { I } = inject();

module.exports = {
  // locators
  homeLink: locate('a').withText('Home'),
  brandsSection: '//div[contains(@class, "brands_products")]',
  poloBrandLink: locate('a').withText('Polo'),
  poloProductCount: locate('a').withText('Polo').find('span'),

  // methods
  navigateToHome() {
    I.click(this.homeLink);
    I.waitForVisible(this.brandsSection);
  },

  expandPoloMenu() {
    I.scrollTo(this.brandsSection);
    I.waitForVisible(this.poloBrandLink);
    I.click(this.poloBrandLink);
    I.wait(2); // Wait for products to load
  },

  verifyPoloProductsDisplayed() {
    I.see('Polo', this.brandsSection);
    I.seeElement(this.poloProductCount);
  }
} 