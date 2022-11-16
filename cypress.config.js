const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": true,
            "json": true
        }
    },


  // These settings apply everywhere unless overridden
  // Viewport settings overridden for component tests
  // Command timeout ovA
  e2e: {
    // screenshotsFolder: 'cypress\\e2e\\my_tests',
    // baseUrl:  'http://localhost:8080',
    defaultCommandTimeout: 5000,
    projectId: "rxuq35",
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
  }
  },
    

  env: {
    login_url: 'emrekoseds',
    products_url: '/products',
    GITHUB_TOKEN: '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',
    grepFilterSpecs: true
  }
})