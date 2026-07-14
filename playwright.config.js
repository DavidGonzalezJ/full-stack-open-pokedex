const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './test/e2e',
  use: {
    baseURL: 'http://localhost:8080',
  },
  webServer: {
    command: 'npm run start:test',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
  },
})
