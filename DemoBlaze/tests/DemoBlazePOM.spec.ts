import HomePage from '../Pagemodels/Home.Page';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Can Login in', async ({ page }) => {
  let Home = new HomePage(page);
  await Home.navbar.clickButtonLogIn();
  await Home.loginDialog.fillInputUserName('admin');
  await Home.loginDialog.fillInputPassword('admin');
  await Home.loginDialog.clickButtonLogin();
  await Promise.all([page.waitForNavigation(), Home.loginDialog.clickButtonLogin()]);
  expect(await Home.navbar.isButtonLogOutVisible()).toBe(true);
});
