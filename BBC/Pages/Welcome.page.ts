import { Page } from '@playwright/test';
import { BasePage } from './Base.page';

export default class WelcomePage extends BasePage {
  async open() {
    await this.page.goto(`/`);
  }
}
