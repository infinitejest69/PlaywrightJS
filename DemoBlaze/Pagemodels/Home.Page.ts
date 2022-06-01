import { Page } from '@playwright/test';
import Navbar from '../ComponentModels/navbar.component';
import LoginDialog from '../ComponentModels/Logindialog.component';
import { BasePage } from './BasePage.Page';

export default class HomePage extends BasePage {
  navbar = new Navbar(this.page);
  loginDialog = new LoginDialog(this.page);
}
