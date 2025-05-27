const { I } = inject();

module.exports = {

    // locators
    signupLoginLink: 'Signup / Login',  // Or "//a[contains(text(), 'Signup / Login')]" if you prefer XPath       
    newUserSignupHeading: 'New User Signup!', // Example heading on signup page
  
    // methods
    clickSignupLogin() {
      I.click(this.signupLoginLink);
    },
  
    verifyOnSignupPage() {
      I.see(this.newUserSignupHeading); // Use a unique element if possible
    }
  }