import { Page } from '@playwright/test';

export default class LoginDialog {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private InputUserName = () => this.page.locator("#logInModal >> label:has-text('Username') >> ..>> input");
  private InputPassword = () => this.page.locator("#logInModal >> label:has-text('Password') >> ..>> input");
  private ButtonLogin = () => this.page.locator("#logInModal >> button:has-text('Log in')");
  private ButtonClose = () => this.page.locator("#logInModal >> button:has-text('Close')");

  fillInputUserName = async (value: string) => await this.InputUserName().fill(value);
  fillInputPassword = async (value: string) => await this.InputPassword().fill(value);
  clickButtonLogin = async () => await this.ButtonLogin().click();
  clickButtonClose = async () => await this.ButtonClose().click();

  isOpen = async () => await this.ButtonLogin().isVisible();
}
