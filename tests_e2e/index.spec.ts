import { test, expect } from '@playwright/test'

test('should navigate to the index page', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/')
  await expect(page.locator('h1')).toContainText('counter')
  expect(response?.status()).toBe(200)
})

test('should navigate to the 404 page', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/404')
  await expect(page.locator('h1')).toContainText('404')
  expect(response?.status()).toBe(404)
})
