import { Page } from '@playwright/test';

export default class Cart {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private ButtonPlaceOrder = () => this.page.locator(`button:has-text('place order')`);

  ClickButtonPlaceOrder = async () => await this.ButtonPlaceOrder().click();
}
