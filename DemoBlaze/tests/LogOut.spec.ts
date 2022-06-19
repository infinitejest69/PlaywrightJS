import HomePage from '../Pagemodels/Home.Page';
import { test, expect } from '@playwright/test';

const user = {
  name: 'admin',
  password: 'admin',
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  //Login
  // TODO Call Login Test instead of Duplicating code
  let Home = new HomePage(page);
  await Home.navbar.clickButtonLogIn();
  await Home.loginDialog.fillInputUserName(user.name);
  await Home.loginDialog.fillInputPassword(user.password);
  await Home.loginDialog.clickButtonLogin();
  await Home.navbar.waitButtonLogOut();
  expect(await Home.navbar.isButtonLogOutVisible()).toBe(true);
});

test.describe('Log Out', () => {
  test('Logout Button should be on the home page when logged in', async ({ page }) => {
    let Home = new HomePage(page);
    expect(await Home.navbar.isButtonLogOutVisible()).toBe(true);
  });

  test('Should be able to Logout', async ({ page }) => {
    let Home = new HomePage(page);
    await Home.navbar.clickButtonLogOut();
    await Home.navbar.waitButtonLogIn();
    expect(await Home.navbar.isButtonLogInVisible()).toBe(true);
  });
});
