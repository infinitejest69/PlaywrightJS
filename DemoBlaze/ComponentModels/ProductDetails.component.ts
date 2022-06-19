import { expect, Page } from '@playwright/test';

export default class ProductsDetails {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private Price =  () => this.page.locator(`.price-container`);
  private ButtonAddToCart =  () => this.page.locator(`a[onclick="addToCart(1)"]`);

  GetPrice = async () => await this.Price().innerText();

  async clickAddToCart() {
    await this.ButtonAddToCart().click();
    this.page.once('dialog', (dialog) => {
      expect(dialog.message()).toBe('Product added');
      dialog.dismiss().catch(() => {});
    });
  }
}
