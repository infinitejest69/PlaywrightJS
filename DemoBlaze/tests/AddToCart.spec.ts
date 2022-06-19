import HomePage from '../Pagemodels/Home.Page';
import ProductDetail from '../Pagemodels/ProductDetails.Page';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Add to Cart', () => {
  test('Add a single item to Cart', async ({ page }) => {
    let home = new HomePage(page);
    let product = new ProductDetail(page);
    //Click First Product
    await Promise.all([page.waitForNavigation(), home.Products.ClickProductLinkByNth(1)]);
    await product.ProductDetail.clickAddToCart();
  });

  test('First Product should be Samsung Galaxy S6', async ({ page }) => {
    let home = new HomePage(page);
    expect(await home.Products.GetProductDescriptionByNth(1)).toBe('Samsung galaxy s6');
  });

  //Want this to fail to check test works
  //never trust a test you have not seen fail
  test('Second Product should be Nokia lumia 1520', async ({ page }) => {
    let home = new HomePage(page);
    expect(await home.Products.GetProductDescriptionByNth(2)).toBe('Nokia lumia 1521');
  });
});
