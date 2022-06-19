import HomePage from '../Pagemodels/Home.Page';
import { test, expect } from '@playwright/test';

const user = {
  name: 'admin',
  password: 'admin',
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Login', () => {
  test('Login Button should be on HomePage', async ({ page }) => {
    let Home = new HomePage(page);
    expect(await Home.navbar.isButtonLogInVisible()).toBe(true);
    expect(await page.title()).toBe('STORE');
  });

  test('Click login should open dialog', async ({ page }) => {
    let Home = new HomePage(page);
    await Home.navbar.clickButtonLogIn();
    expect(await Home.loginDialog.isOpen()).toBe(true);
  });

  test('Should be able to login as admin', async ({ page }) => {
    let Home = new HomePage(page);
    await Home.navbar.clickButtonLogIn();
    await Home.loginDialog.fillInputUserName(user.name);
    await Home.loginDialog.fillInputPassword(user.password);
    await Home.loginDialog.clickButtonLogin();
    await Home.navbar.waitButtonLogOut();
    expect(await Home.navbar.isButtonLogOutVisible()).toBe(true);
  });
});
