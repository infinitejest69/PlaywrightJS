import HomePage from '../Pagemodels/Home.Page';
import { test, expect } from '@playwright/test';

const user = {
  name: 'admin',
  password: 'admin',
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
test.describe('Purchase an item', () => {});
