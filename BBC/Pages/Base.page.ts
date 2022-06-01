import { Page } from '@playwright/test';
import NavMenu from '../Components/Nav.component';

export class BasePage {
  public page: Page;
  constructor(page) {
    this.page = page;
    this.NavMenu = new NavMenu(page);
  }

  //TODO Remove this from constructor
  public NavMenu;
}
