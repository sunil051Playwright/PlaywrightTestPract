import { test} from "@playwright/test";
import { execPath } from "node:process";

test("practive locators", async({page})=>{

await page.goto("https://www.saucedemo.com/")
await page.locator("//*[@id='user-name']").fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('.submit-button').click();
await page.locator('select[data-test=product-sort-container]').click();
await page.locator("text='Sauce Labs Backpack'").click();
await page.locator("data-test=add-to-cart").click();

})

test("Test locatiors", async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator(".form_group",{has:page.locator("#user-name")}).click();
    await page.locator(".form_group",{has:page.locator("#user-name")}).pressSequentially("standard_user");

    await page.locator(".form_group",{hasNot:page.locator("#user-name")}).click();
    await page.locator(".form_group",{hasNot:page.locator("#user-name")}).pressSequentially("secret_sauce");

    await page.locator("id=login-button").click();

    await page.locator("//a",{hasText:"Sauce Labs Bike Light"}).click();
    await page.locator("data-test=back-to-products").click()

    await page.locator(".inventory_item_name ",{hasNotText: /Sauce.*/}).click()
})

test("Test by getby methods",async({page})=>{
await page.goto("https://demo.nopcommerce.com/login")
 await page.getByLabel("Email:", {exact:true}).fill("test2123@gmail.com")
 
console.log(await page.getByText("New Customer",{exact:true}).textContent());
await page.getByAltText("nopCommerce demo store").click()
await page.getByTitle("Show products in category Electronics").first().click()
await page.getByLabel("Search store").fill("Mobile")
await page.getByRole("button",{name:'Search'}).click();

await page.goto("https://www.saucedemo.com/");
await page.getByTestId("username").fill("test");


})