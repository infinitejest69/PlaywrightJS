import Navbar from '../ComponentModels/navbar.component';
import LoginDialog from '../ComponentModels/Logindialog.component';

import { BasePage } from './BasePage.Page';
import ProductsDetails from '../ComponentModels/ProductDetails.component';

export default class ProductDetailsPage extends BasePage {
  navbar = new Navbar(this.page);
  loginDialog = new LoginDialog(this.page);
  ProductDetail = new ProductsDetails(this.page);
}
