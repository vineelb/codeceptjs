const {
  I
} = inject();
const faker = require('faker');
module.exports = {

  // Locators
  homeLink: locate('a').withText('Home'),
  productsLink: locate('a').withText('Products'),
  cartLink: locate('a').withText('Cart'),
  signupLoginLink: locate('a').withText('Signup / Login'),
  testCasesLink: locate('a').withText('Test Cases'),
  apiTestingLink: locate('a').withText('API Testing'),
  videoTutorialsLink: locate('a').withText('Video Tutorials'),
  contactUsLink: locate('a').withText('Contact us'),
  loginHeading: locate('h2').withText('Login to your account'),
  loginEmailInput: locate('input').withAttr({
    'data-qa': 'login-email'
  }),
  loginPasswordInput: locate('input').withAttr({
    'data-qa': 'login-password'
  }),
  loginButton: locate('button').withAttr({
    'data-qa': 'login-button'
  }),
  signupHeading: locate('h2').withText('New User Signup!'),
  signupNameInput: locate('input').withAttr({
    'data-qa': 'signup-name'
  }),
  signupEmailInput: locate('input').withAttr({
    'data-qa': 'signup-email'
  }),
  signupButton: locate('button').withAttr({
    'data-qa': 'signup-button'
  }),
  subscriptionHeading: locate('h2').withText('Subscription'),
  subscribeEmailInput: '#susbscribe_email', // CSS as no suitable text/label
  subscribeButton: '#subscribe', // CSS as no suitable text/label
  scrollUpButton: '#scrollUp', // CSS as no suitable text/label


  // Methods
  login(email, password) {
    I.fillField(this.loginEmailInput, email);
    I.fillField(this.loginPasswordInput, password);
    I.click(this.loginButton);
  },

  signup() {
    I.fillField(this.signupNameInput, faker.name.findName());
    I.fillField(this.signupEmailInput, faker.internet.email());
    I.click(this.signupButton);
    // I.click(this.homeLink);
  },

  subscribe(email) {
    I.fillField(this.subscribeEmailInput, email);
    I.click(this.subscribeButton);
  }
}