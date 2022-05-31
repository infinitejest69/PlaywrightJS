import { Page } from '@playwright/test';
import Navbar from '../ComponentModels/navbar.component';

export default class HomePage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  navbar = () => new Navbar(this.page);
}
