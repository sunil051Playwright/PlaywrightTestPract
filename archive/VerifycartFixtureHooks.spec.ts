import {expect} from "@playwright/test"
import {test} from "../Fixtures/POMfixtures"


test("verify the cart", async({page, loginPage, homePage, cartPage })=>{
await loginPage.openUrl();
await loginPage.Login("standard_user",'secret_sauce');
await expect(homePage.homepageHeading).toHaveText('Swag Labs')
await homePage.addtocart();
await expect(homePage.removeButton).toBeVisible();
await expect(homePage.cartIcon).toHaveText('1');
await homePage.gotoCart();
await expect(cartPage.itemlink).toHaveText('Sauce Labs Backpack');
})