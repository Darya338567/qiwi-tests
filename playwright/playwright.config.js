import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://edge.qiwi.com',
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.TOKEN || ''}`
    }
  },
  reporter: 'html'
});