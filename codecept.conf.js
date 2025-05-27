/** @type {CodeceptJS.MainConfig} */
require('./heal')
require('dotenv').config();
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.fabletics.com/',
      show: true,
      waitForTimeout: 10000,
      waitForNavigation: 'load',
      navigationTimeout: 60000,
      video: true
    },
    ai: {
      request: async (messages) => {
        const { GoogleGenerativeAI } = require('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
          model: 'gemini-2.0-flash'
        });

        const prompt = messages.map(msg => msg.content).join('\n');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
      },
      // request: async messages => {
      //   const OpenAI = require('openai')
      //   const openai = new OpenAI({ apiKey: process.env.OpenAI_API_KEY})
    
      //   const completion = await openai.chat.completions.create({
      //     model: 'gpt-3.5-turbo',
      //     messages,
      //   })
    
      //   return completion?.choices[0]?.message?.content
      // },    
      html: {
        allowedAttrs: ['data-qa', 'id', 'for', 'class', 'name', 'type', 'value', 'aria-labelledby', 'aria-label', 'label', 'placeholder', 'title', 'alt', 'src', 'role']
      }
    },

  },
  include: {
    I: './steps_file.js',
    publicHome: './pages/publicHome.js',
    loginpage: './pages/login.js',
    signup: './pages/registrationPage.js'
  },
  plugins: {
    heal: {
      enabled: false
    },
    analyze: {
      enabled: false,
      // analyze up to 3 failures in detail
      analyze: 3,
      // group similar failures when 5 or more tests fail
      clusterize: 5,
      // enable screenshot analysis (requires modal that can analyze  screenshots)
      vision: false
    },
    // pageInfo: {
    //   enabled: true,
    // },
    screenshotOnFail: {
      enabled: true
    },
    // mocha: {
    //   reporterOptions: {
    //     mochaFile: 'output/junit-reports/result.xml',
    //     toConsole: true,
    //     reportDir: 'output'
    //   },
    // },
    customLocator: {
      enabled: true,
      attribute: 'data-test'
    },
    allure: {
      enabled: true,
      outputDir: './output/allure-results',
      require: '@codeceptjs/allure-legacy',
      screenshotOnFail: true,
      screenshotOnStep: true,
      stepByStepReport: true
      // screenshotsForAllureReport: true
    },
      // testomatio: {
      //   enabled: true,
      //   require: '@testomatio/reporter/lib/adapter/codecept',
      //   apiKey: process.env.TESTOMATIO,
      // }
    // customLocator: {
    //   enabled: true,
    //   prefix: '=', 
    //   attribute: ['data-qa', 'data-test'],
    //   strategy: 'xpath'
    // }
    screenshotOnFail: {
      enabled: true
    }
  },
  
  // require: ['@codeceptjs/allure-legacy'],
  name: 'codeceptjs'
}