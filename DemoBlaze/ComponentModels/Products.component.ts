import { Page } from '@playwright/test';

export default class Products {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private ProductByNth = (nth: number) => this.page.locator(`.card-block >> a >> nth=${nth - 1}`);
  private ProductLinkByName = (productName: string) => this.page.locator(`.card-block:has-text("${productName}") >> a`);
  private ProductDescriptionByName = (productName: string) => this.page.locator(`.card-block:has-text("${productName}") >>  .card-text`);

  ClickProductLinkByName = async (productName: string) => await this.ProductLinkByName(productName).click();
  ClickProductLinkByNth = async (nth: number) => await this.ProductByNth(nth).click();
  GetProductDescriptionByName = async (productName: string) => await this.ProductDescriptionByName(productName).innerText();
  GetProductDescriptionByNth = async (nth: number) => await this.ProductByNth(nth).innerText();

  isProductVisible = async (productName: string) => await this.ProductLinkByName(productName).isVisible();
}
