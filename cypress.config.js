const { defineConfig } = require('cypress')

module.exports = defineConfig({


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
    chromeWebSecurity: false
  },

  env: {
    login_url: 'emrekoseds',
    products_url: '/products'
  }
})