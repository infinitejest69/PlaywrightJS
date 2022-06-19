import HomePage from '../Pagemodels/Home.Page';
import { test, expect } from '@playwright/test';

const user = {
  name: 'admin',
  password: 'admin',
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Add to Cart', () => {
  test('Add to Cart Button should be on HomePage', async ({ page }) => {});
  test('Add a single item to Cart', async ({ page }) => {});
});
