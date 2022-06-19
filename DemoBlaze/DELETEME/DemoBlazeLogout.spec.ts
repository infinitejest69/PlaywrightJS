import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('a:has-text("Log in")').click();
  await page.locator('text=Log in × Username: Password: Close Log in >> input[type="text"]').click();
  await page.locator('text=Log in × Username: Password: Close Log in >> input[type="text"]').fill('admin');
  await page.locator('text=Log in × Username: Password: Close Log in >> input[type="text"]').press('Tab');
  await page.locator('text=Log in × Username: Password: Close Log in >> input[type="password"]').fill('admin');
  await Promise.all([page.waitForNavigation(/*{ url: 'https://demoblaze.com/' }*/), page.locator('button:has-text("Log in")').click()]);
});

test('Can Log Out', async ({ page }) => {
  await page.locator('text=Log out').click();
  await expect(page).toHaveURL('https://demoblaze.com/index.html');
  await expect(page.locator('a:has-text("Log in")').first()).toBeVisible();
});
