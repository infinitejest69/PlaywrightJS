import { Page } from '@playwright/test';

export default class Navbar {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  ButtonHome = async () => this.page.locator(".nav-link:has-text('Home')");
  ButtonContact = async () => this.page.locator(".nav-link:has-text('Contact')");
  ButtonAbout = async () => this.page.locator(".nav-link:has-text('About')");
  ButtonCart = async () => this.page.locator(".nav-link:has-text('Cart')");
  ButtonLogIn = async () => this.page.locator("a:has-text('Log in')");
  ButtonLogOut = async () => this.page.locator("a:has-text('Log out')");
  ButtonSignUp = async () => this.page.locator("a:has-text('Sign up')");
}
