import { test, expect } from '@playwright/test'

test('should navigate to the index page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('h1')).toContainText('counter')
})

test('should navigate to the 404 page', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/404')
  await expect(page.locator('h1')).toContainText('404')
  expect(response?.status()).toBe(404)
})

test('increment and decrement', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('h1')).toContainText('10')

  await page.getByRole('button', { name: 'increment' }).click();
  await expect(page.locator('h1')).toContainText('11')

  await page.getByRole('button', { name: 'decrement' }).click();
  await page.getByRole('button', { name: 'decrement' }).click();
  await page.getByRole('button', { name: 'decrement' }).click();
  await expect(page.locator('h1')).toContainText('8')
})
