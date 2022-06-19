import { Page } from '@playwright/test';

export default class SweetAlert {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private SuccessCheck = () => this.page.locator(`div[class="sa-icon sa-success animate"]`);
  private GetDetails = () => this.page.locator(`.sweet-alert >> p`);

  GetDetailText = async () => await this.GetDetails().innerText();

  isSuccessCheckVisible = async () => await this.SuccessCheck().isVisible();
}
