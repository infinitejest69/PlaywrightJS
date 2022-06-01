import { test, expect } from '@playwright/test';
import WelcomePage from '../Pages/Welcome.page';

test('Open news', async ({ page }) => {
  let home = new WelcomePage(page);
  await home.open();
  await home.NavMenu.clickButtonNews();
  expect(await page.title()).toBe('Home - BBC News');
});
