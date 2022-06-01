import { Page } from '@playwright/test';

export class BasePage {
  public page: Page;
  constructor(page) {
    this.page = page;
  }
  async navigate(path) {
    await this.page.goto(`/${path}`);
  }
}
