import Navbar from '../ComponentModels/navbar.component';
import LoginDialog from '../ComponentModels/Logindialog.component';

import { BasePage } from './BasePage.Page';
import PlaceOrderDialog from '../ComponentModels/PlaceOrderDialog.component';
import Cart from '../ComponentModels/Cart.component';
import SweetAlert from '../ComponentModels/SweetAlert.component';

export default class CartPage extends BasePage {
  navbar = new Navbar(this.page);
  loginDialog = new LoginDialog(this.page);
  placeOrderDialog = new PlaceOrderDialog(this.page);
  Cart = new Cart(this.page);
  Alert = new SweetAlert(this.page);
}
