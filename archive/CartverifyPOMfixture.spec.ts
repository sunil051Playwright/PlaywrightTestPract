import {test, expect} from "../Fixtures/POMfixureHooks"


test("verify the cart", async({page, loginPage, homePage })=>{
await loginPage.openUrl();
await loginPage.Login("standard_user",'secret_sauce');
await expect(homePage.homepageHeading).toHaveText('Swag Labs')
await homePage.addtocart();
await expect(homePage.removeButton).toBeVisible();
await expect(homePage.cartIcon).toHaveText('1');
await homePage.gotoCart();
await loginPage.Logoutfromapp();
})

test("Navigate to cart and verify",async({page, loginPage, homePage, cartPage})=>{
await loginPage.openUrl();
await loginPage.Login("standard_user",'secret_sauce');
await homePage.addtocart();
await homePage.gotoCart();
await expect(cartPage.itemlink).toHaveText('Sauce Labs Backpack');
await loginPage.Logoutfromapp();
})