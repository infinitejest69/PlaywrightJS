import { Page } from '@playwright/test';

export default class LoginDialog {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private InputUserName = async () => await this.page.locator("#logInModal >> label:has-text('Username') >> ..>> input");
  private InputPassword = async () => await this.page.locator("#logInModal >> label:has-text('Password') >> ..>> input");
  private ButtonLogin = async () => await this.page.locator("#logInModal >> button:has-text('Log in')");
  private ButtonClose = async () => await this.page.locator("#logInModal >> button:has-text('Close')");

  fillInputUserName = async (value: string) => (await this.InputUserName()).fill(value);
  fillInputPassword = async (value: string) => (await this.InputPassword()).fill(value);
  clickButtonLogin = async () => (await this.ButtonLogin()).click();
  clickButtonClose = async () => (await this.ButtonClose()).click();
}
