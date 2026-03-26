import {test, expect} from "@playwright/test";
import { beforeEach } from "node:test";

test.beforeEach(async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator("//*[@id='user-name']").fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('.submit-button').click();
})
test.slow(({browserName})=>browserName=="firefox")
test("test screen shot and reports",async({page})=>{
await expect(page.getByTestId("add-to-cart-sauce-labs-backpack").first()).toBeVisible();
await page.getByTestId("add-to-cart-sauce-labs-backpack").first().click();
await page.locator(".shopping_cart_link").click();
await expect(page.getByText("Sauce Labs Backpack", {exact:true})).toBeVisible();
await expect.soft(page.getByText("2", {exact:true})).toBeVisible();
await page.locator("#remove-sauce-labs-backpack").click();

})
