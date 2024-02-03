const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  viewportHeight:1024,
  viewportWidth:1440,
  retries:{
    runMode:1,
  },

  //Generating the HTML report
   reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'clocautomation',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
e2e: {
    "baseUrl":'https://www.gmail.com',
    "specPattern":[
     "cypress/e2e/pratice.cy.js",
    "cypress/e2e/businessInfo.cy.js"

    ],
     setupNodeEvents(on, config) {
      // implement node event listeners here
      
     //for HTML reports
    require('cypress-mochawesome-reporter/plugin')(on);
    
    },
  },
});
