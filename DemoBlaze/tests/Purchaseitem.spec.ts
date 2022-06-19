import HomePage from '../Pagemodels/Home.Page';
import ProductDetail from '../Pagemodels/ProductDetails.Page';
import { test, expect } from '@playwright/test';
import CartPage from '../Pagemodels/Cart.Page';

const ValidOrderDetails = {
  name: 'Test User',
  country: 'United Kingdom',
  city: 'Edinburgh',
  card: '0000 0000 0000 0000',
  month: 'November',
  year: '2022',
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
test.describe('Purchase an item', () => {
  test('Buy a single item', async ({ page }) => {
    let home = new HomePage(page);
    let product = new ProductDetail(page);
    let cart = new CartPage(page);
    await Promise.all([page.waitForNavigation(), home.Products.ClickProductLinkByNth(1)]);
    await product.ProductDetail.clickAddToCart();
    await Promise.all([page.waitForNavigation(), home.navbar.clickButtonCart()]);
    await cart.Cart.ClickButtonPlaceOrder();
    await cart.placeOrderDialog.fillOrderDetails(
      ValidOrderDetails.name,
      ValidOrderDetails.country,
      ValidOrderDetails.city,
      ValidOrderDetails.card,
      ValidOrderDetails.month,
      ValidOrderDetails.year
    );
    expect(await cart.Alert.isSuccessCheckVisible()).toBe(true);
    expect(await cart.Alert.GetDetailText()).toContain(ValidOrderDetails.card);
    expect(await cart.Alert.GetDetailText()).toContain(ValidOrderDetails.name);
  });
});
