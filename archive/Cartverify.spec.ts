import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/Login"
import { homePage } from "../pages/Home page";
import { cartPage } from "../pages/cart";

test("verify the cart", async({page})=>{
const loginpageObj = new LoginPage(page)
await loginpageObj.openUrl();
await loginpageObj.Login("standard_user",'secret_sauce');
const homepageObj = new homePage(page);
await expect(homepageObj.homepageHeading).toHaveText('Swag Labs')
await homepageObj.addtocart();
await expect(homepageObj.removeButton).toBeVisible();
await expect(homepageObj.cartIcon).toHaveText('1');
await homepageObj.gotoCart();
const cartPageObj = new cartPage(page);
await expect(cartPageObj.itemlink).toHaveText('Sauce Labs Backpack');
})