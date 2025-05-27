const {
  I
} = inject();
const faker = require('faker');
const userDetails = {
  title: faker.random.arrayElement(['Mr', 'Mrs']),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  days: faker.datatype.number({ min: 1, max: 31 }).toString(),
  months: faker.date.month(), // This will give full month name. You might need to adjust to match select options.
  years: faker.datatype.number({ min: 1900, max: 2023 }).toString(),  // Adjust range as needed.
  newsletter: faker.datatype.boolean(),
  specialOffers: faker.datatype.boolean(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  company: faker.company.companyName(),
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  country: 'India', // This might not match the available options. Consider using a fixed array of countries.
  state: faker.address.state(),
  city: faker.address.city(),
  zipcode: '584202',
  mobileNumber: faker.phone.phoneNumber(),
}
module.exports = {
  root: locate('form').inside('div.login-form'),

  // Locators
  titleMr: locate('label').withText('Mr.'),
  titleMrs: locate('label').withText('Mrs.'),
  nameLabel: locate('label[for="name"]').withText('Name'),
  nameInput: locate('#name'),
  emailLabel: locate('label[for="email"]').withText('Email'),
  emailInput: locate('#email'),
  passwordLabel: locate('label[for="password"]').withText('Password'),
  passwordInput: locate('#password'),
  dobLabel: locate('label').withText('Date of Birth'),
  daysSelect: locate('#days'),
  monthsSelect: locate('#months'),
  yearsSelect: locate('#years'),
  newsletterLabel: locate('label[for="newsletter"]').withText('Sign up for our newsletter!'),
  newsletterCheckbox: locate('#newsletter'),
  specialOffersLabel: locate('label[for="optin"]').withText('Receive special offers from our partners!'),
  specialOffersCheckbox: locate('#optin'),
  firstNameLabel: locate('label[for="first_name"]').withText('First name'),
  firstNameInput: locate('#first_name'),
  lastNameLabel: locate('label[for="last_name"]').withText('Last name'),
  lastNameInput: locate('#last_name'),
  companyLabel: locate('label[for="company"]').withText('Company'),
  companyInput: locate('#company'),
  address1Label: locate('label[for="address1"]').withText('Address'),
  address1Input: locate('#address1'),
  address2Label: locate('label[for="address2"]').withText('Address 2'),
  address2Input: locate('#address2'),
  countryLabel: locate('label[for="country"]').withText('Country'),
  countrySelect: locate('#country'),
  stateLabel: locate('label[for="state"]').withText('State'),
  stateInput: locate('#state'),
  cityLabel: locate('label[for="city"]').withText('City'),
  cityInput: locate('#city'),
  zipcodeLabel: locate('label').withText('Zipcode'), // Two 'City' labels, using partial text match for Zipcode
  zipcodeInput: locate('#zipcode'),
  mobileNumberLabel: locate('label[for="mobile_number"]').withText('Mobile Number'),
  mobileNumberInput: locate('#mobile_number'),
  createAccountButton: locate('button').withText('Create Account'),


  // Methods
  async Signup() {
    I.waitForVisible(this.root); //ensure form is visible
    if (userDetails.title === 'Mr') {
      I.click(this.titleMr);
    } else {
      I.click(this.titleMrs);
    }
    // I.fillField(this.nameInput, userDetails.name);
    // I.fillField(this.emailInput, userDetails.email);
    I.fillField(this.passwordInput, userDetails.password);
    I.selectOption(this.daysSelect, userDetails.days);
    I.selectOption(this.monthsSelect, userDetails.months);
    I.selectOption(this.yearsSelect, userDetails.years);
    if (userDetails.newsletter) {
      I.checkOption(this.newsletterCheckbox);
    }
    if (userDetails.specialOffers) {
      I.checkOption(this.specialOffersCheckbox);
    }
    I.fillField(this.firstNameInput, userDetails.firstName);
    I.fillField(this.lastNameInput, userDetails.lastName);
    I.fillField(this.companyInput, userDetails.company);
    I.fillField(this.address1Input, userDetails.address1);
    I.fillField(this.address2Input, userDetails.address2);
    I.selectOption(this.countrySelect, userDetails.country);
    I.fillField(this.stateInput, userDetails.state);
    I.fillField(this.cityInput, userDetails.city);
    I.fillField(this.zipcodeInput, userDetails.zipcode);
    I.fillField(this.mobileNumberInput, userDetails.mobileNumber);
    I.click(this.createAccountButton);
  },
  async validateRegistrationForm() {
    I.waitForVisible(this.root); // Ensure the form is visible
  
    // Validate title selection
    I.seeElement(this.titleMr);
    I.seeElement(this.titleMrs);
  
    // Validate input fields
    I.seeElement(this.nameInput);
    I.seeElement(this.emailInput);
    I.seeElement(this.passwordInput);
    I.seeElement(this.daysSelect);
    I.seeElement(this.monthsSelect);
    I.seeElement(this.yearsSelect);
    I.seeElement(this.firstNameInput);
    I.seeElement(this.lastNameInput);
    I.seeElement(this.companyInput);
    I.seeElement(this.address1Input);
    I.seeElement(this.address2Input);
    I.seeElement(this.countrySelect);
    I.seeElement(this.stateInput);
    I.seeElement(this.cityInput);
    I.seeElement(this.zipcodeInput);
    I.seeElement(this.mobileNumberInput);
  
    // Validate checkboxes
    I.seeElement(this.newsletterCheckbox);
    I.seeElement(this.specialOffersCheckbox);
  
    // Validate the "Create Account" button
    I.seeElement(this.createAccountButton);
  
    // Optionally, you can add assertions to check if fields are pre-filled correctly
    // I.seeInField(this.nameInput, userDetails.name);
    // I.seeInField(this.emailInput, userDetails.email);
    // I.seeInField(this.passwordInput, userDetails.password);
    // I.seeInField(this.firstNameInput, userDetails.firstName);
    // I.seeInField(this.lastNameInput, userDetails.lastName);
    // I.seeInField(this.companyInput, userDetails.company);
    // I.seeInField(this.address1Input, userDetails.address1);
    // I.seeInField(this.address2Input, userDetails.address2);
    // I.seeInField(this.stateInput, userDetails.state);
    // I.seeInField(this.cityInput, userDetails.city);
    // I.seeInField(this.zipcodeInput, userDetails.zipcode);
    // I.seeInField(this.mobileNumberInput, userDetails.mobileNumber);
  }

}