import { Page } from '@playwright/test';

export default class NavMenu {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private ButtonNews = async () => await this.page.locator('nav >>  li:has-text("News")>> nth=0');
  private ButtonSport = async () => await this.page.locator('nav >>  li:has-text("Sport")>> nth=0');
  private ButtonWeather = async () => await this.page.locator('nav >> li:has-text("Weather")>> nth=0');
  private ButtoniPlayer = async () => await this.page.locator('nav >>  li:has-text("iPlayer")>> nth=0');
  private ButtonsSounds = async () => await this.page.locator('nav >>  li:has-text("Sounds")>> nth=0');
  private ButtonBitesize = async () => await this.page.locator('nav >>  li:has-text("BitSize")>> nth=0');
  private ButtonMore = async () => await this.page.locator('nav >> id="more-menu-button"');

  clickButtonNews = async () => (await this.ButtonNews()).click();
  clickButtonSport = async () => (await this.ButtonSport()).click();
  clickButtonWeather = async () => (await this.ButtonWeather()).click();
  clickButtoniPlayer = async () => (await this.ButtoniPlayer()).click();
  clickButtonsSounds = async () => (await this.ButtonsSounds()).click();
  clickButtonBitesize = async () => (await this.ButtonBitesize()).click();
  clickButtonMore = async () => (await this.ButtonMore()).click();
}
