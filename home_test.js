const allure = codeceptjs.container.plugins('allure');

Feature('Home Page Navigation');

const homePage = require('./pages/homePage');

Before(({ I }) => {
    allure.feature('Home Page Navigation');
    I.amOnPage('https://www.automationexercise.com/');
});

Scenario('Navigate to home and expand Polo menu @navigation', async ({ I }) => {
    allure.story('Brand Navigation');
    allure.severity('normal');
    
    // Navigate to home page
    homePage.navigateToHome();
    
    // Expand Polo menu
    homePage.expandPoloMenu();
    
    // Verify Polo products are displayed
    homePage.verifyPoloProductsDisplayed();
    
    // Additional verification for Polo products
    I.see('(6)Polo'); // Verify the count of Polo products
}); 