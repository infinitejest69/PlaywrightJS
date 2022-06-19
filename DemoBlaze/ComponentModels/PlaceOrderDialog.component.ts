import { Page } from '@playwright/test';

export default class PlaceOrderDialog {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private NameInput = () => this.page.locator(`#Name`);
  private CountryInput = () => this.page.locator(`#country`);
  private CityInput = () => this.page.locator(`#city`);
  private CreditCardInput = () => this.page.locator(`#Card`);
  private MonthInput = () => this.page.locator(`#Year`);
  //Another way to do it chaining locators
  private YearInput = () => this.page.locator(`.modal-dialog >> label:has-text('Year') >> .. >> input`);
  private ButtonPurchase = () => this.page.locator(`button:has-text("Purchase")`);

  async fillOrderDetails(name: string, country: string, city: string, card: string, month: string, year: string) {
    await this.NameInput().fill(name);
    await this.CountryInput().fill(country);
    await this.CityInput().fill(city);
    await this.CreditCardInput().fill(card);
    await this.MonthInput().fill(month);
    await this.YearInput().fill(year);
    await this.ButtonPurchase().click();
  }
}
