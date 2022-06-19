import { Page } from '@playwright/test';

export default class Products {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private ProductLinkByName = async (productName: string) => this.page.locator(`.card-block:has-text("${productName}") >> a`);
  private ProductDescriptionByName = async (productName: string) => this.page.locator(`.card-block:has-text("${productName}") >>  .card-text`);

  ClickProductLinkByName = async (productName: string) => (await this.ProductLinkByName(productName)).click();
  GetProductDescriptionByName = async (productName: string) => (await this.ProductDescriptionByName(productName)).innerText();

  isProductVisible = async (productName: string) => (await this.ProductLinkByName(productName)).isVisible();
}
