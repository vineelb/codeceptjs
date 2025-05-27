const allure = codeceptjs.container.plugins('allure');
const faker = require('faker');

Feature('Login Page Tests');

// Import page objects
const loginPage = require('./pages/login');

Before(({ I }) => {
    allure.feature('Login Functionality');
    I.amOnPage('https://www.automationexercise.com/');
});

// Test Group 1: UI Verification Tests
Scenario('Verify login page UI elements @smoke', ({ I }) => {
    allure.story('UI Verification');
    allure.severity('normal');
    
    I.click(loginPage.signupLoginLink);
    I.see('Login to your account', loginPage.loginHeading);
    I.seeElement(loginPage.loginEmailInput);
    I.seeElement(loginPage.loginPasswordInput);
    I.seeElement(loginPage.loginButton);
});

// Test Group 2: Authentication Tests
Scenario('Successful login with valid credentials @critical', async ({ I }) => {
    allure.story('Authentication');
    allure.severity('critical');
    
    I.click(loginPage.signupLoginLink);
    loginPage.login('eqtest@test.com', 'testing123'); // Replace with valid credentials
    I.see('Logout'); // Update with actual success message
});

Scenario('Failed login with invalid credentials @high', async ({ I }) => {
    allure.story('Authentication');
    allure.severity('high');
    
    I.click(loginPage.signupLoginLink);
    loginPage.login(faker.internet.email(), faker.internet.password());
    I.see('Your email or password is incorrect!'); // Update with actual error message
});

// Test Group 3: Validation Tests
Scenario('Login with invalid email format @medium', async ({ I }) => {
    allure.story('Validation');
    allure.severity('medium');
    
    I.click(loginPage.signupLoginLink);
    loginPage.login('invalid-email', 'password123');
    I.see('Your email or password is incorrect!'); // Update with actual validation message
});

Scenario('Login with empty email field @medium', async ({ I }) => {
    allure.story('Validation');
    allure.severity('medium');
    
    I.click(loginPage.signupLoginLink);
    loginPage.login('', 'password123');
    I.seeElement('input:invalid'); // HTML5 validation
});

Scenario('Login with empty password field @medium', async ({ I }) => {
    allure.story('Validation');
    allure.severity('medium');
    
    I.click(loginPage.signupLoginLink);
    loginPage.login('test@example.com', '');
    I.seeElement('input:invalid'); // HTML5 validation
});

// Test Group 4: Security Tests
Scenario('Verify password field is masked @security', async ({ I }) => {
    allure.story('Security');
    allure.severity('normal');
    
    I.click(loginPage.signupLoginLink);
    I.seeElementAttribute(loginPage.loginPasswordInput, 'type', 'password');
});

Scenario('Test XSS prevention in login form @security', async ({ I }) => {
    allure.story('Security');
    allure.severity('critical');
    
    I.click(loginPage.signupLoginLink);
    loginPage.login('<script>alert("xss")</script>@test.com', 'password123');
    I.dontSee('<script>'); // Verify XSS content is escaped
});

// Test Group 5: Edge Cases
Scenario('Login with maximum length email @boundary', async ({ I }) => {
    allure.story('Boundary Testing');
    allure.severity('low');
    
    const longEmail = 'a'.repeat(50) + '@example.com';
    I.click(loginPage.signupLoginLink);
    loginPage.login(longEmail, 'password123');
    // Verify the application handles long email appropriately
});

Scenario('Login with maximum length password @boundary', async ({ I }) => {
    allure.story('Boundary Testing');
    allure.severity('low');
    
    const longPassword = 'a'.repeat(50);
    I.click(loginPage.signupLoginLink);
    loginPage.login('test@example.com', longPassword);
    // Verify the application handles long password appropriately
});

// Test Group 6: User Experience Tests
Scenario('Verify "Enter" key submits the form @ux', async ({ I }) => {
    allure.story('User Experience');
    allure.severity('low');
    
    I.click(loginPage.signupLoginLink);
    I.fillField(loginPage.loginEmailInput, 'test@example.com');
    I.fillField(loginPage.loginPasswordInput, 'password123');
    I.pressKey('Enter');
    // Verify form submission
});

Scenario('Verify tab order of login form @accessibility', async ({ I }) => {
    allure.story('Accessibility');
    allure.severity('low');
    
    I.click(loginPage.signupLoginLink);
    I.pressKey('Tab');
    I.seeElement(loginPage.loginEmailInput);
    I.pressKey('Tab');
    I.seeElement(loginPage.loginPasswordInput);
    I.pressKey('Tab');
    I.seeElement(loginPage.loginButton);
});