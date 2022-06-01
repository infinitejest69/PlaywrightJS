import { test, expect } from '@playwright/test';

test('Visual test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('DemoBlazeHome.png', {
    animations: 'disabled',
    fullPage: true,
    threshold: 0.2,
  });
});
