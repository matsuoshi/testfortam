import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests_e2e',
  testMatch: /.\.(test|spec)\.ts/,
  use: {
    baseUrl: 'http://localhost:3000'
  }
})
