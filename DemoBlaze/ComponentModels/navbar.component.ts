import { Page } from '@playwright/test';

export default class Navbar {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private ButtonHome = async () => this.page.locator(".nav-link:has-text('Home')");
  private ButtonContact = async () => this.page.locator(".nav-link:has-text('Contact')");
  private ButtonAbout = async () => this.page.locator(".nav-link:has-text('About')");
  private ButtonCart = async () => this.page.locator(".nav-link:has-text('Cart')");
  private ButtonLogIn = async () => this.page.locator("a:has-text('Log in')");
  private ButtonLogOut = async () => this.page.locator("a:has-text('Log out')");
  private ButtonSignUp = async () => this.page.locator("a:has-text('Sign up')");

  clickButtonHome = async () => (await this.ButtonHome()).click();
  clickButtonContact = async () => (await this.ButtonContact()).click();
  clickButtonAbout = async () => (await this.ButtonAbout()).click();
  clickButtonCart = async () => (await this.ButtonCart()).click();
  clickButtonLogIn = async () => (await this.ButtonLogIn()).click();
  clickButtonLogOut = async () => (await this.ButtonLogOut()).click();
  clickButtonSignUp = async () => (await this.ButtonSignUp()).click();

  isButtonHomeVisible = async () => (await this.ButtonHome()).isVisible();
  isButtonContactVisible = async () => (await this.ButtonContact()).isVisible();
  isButtonAboutVisible = async () => (await this.ButtonAbout()).isVisible();
  isButtonCartVisible = async () => (await this.ButtonCart()).isVisible();
  isButtonLogInVisible = async () => (await this.ButtonLogIn()).isVisible();
  isButtonLogOutVisible = async () => (await this.ButtonLogOut()).isVisible();
  isButtonSignUpVisible = async () => (await this.ButtonSignUp()).isVisible();
}
