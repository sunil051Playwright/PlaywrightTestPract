import { test, expect, Page } from "@playwright/test";
// let page:Page;

// test.beforeAll(async({browser})=>{
// page= await browser.newPage();
// await page.goto("https://www.saucedemo.com/")
// await page.locator("//*[@id='user-name']").fill("standard_user");
// await page.locator('#password').fill("secret_sauce");
// await page.locator('.submit-button').click();
// })


test("Test assertions", async({page})=>{
   // await page.goto("https://www.saucedemo.com/");
//await expect(page.locator('[data-test = "login-button"]')).toHaveCount(1);
//await expect.soft(page.locator('[data-test = "login-button"]')).toBeEnabled();
//await expect.soft(page.locator('[data-test = "login-button"]')).toBeDisabled();
//await expect.soft(page.locator('[data-test = "login-button"]')).toBeHidden();
//await expect.soft(page.locator('[data-test = "login-button"]')).toBeVisible();
//await expect(page.locator('[data-test = "login-button"]')).toHaveText("Login");
//await expect(page.locator('[data-test = "login-button"]')).toHaveAttribute('name' , 'login-button');
//await expect(page.locator('[data-test = "login-button"]')).toHaveId('login-button');
// await expect(page).toHaveTitle('Swag Labs');

// await expect(page,"not have this title").not.toHaveTitle('Swag Labs');

// Practice of Press and fill

await page.goto("https://www.google.com/");
await page.locator('.gLFyf').pressSequentially("play",{delay:1000});
await page.locator('.gLFyf').press('Backspace');
await page.locator('.gLFyf').press("ArrowDown+ArrowDown+ArrowDown+ArrowDown");
//await page.getByLabel('Google Search').dispatchEvent('click');
//await page.locator('.gLFyf').press("Enter")
// Practice of clicks and right click,Programmatic 
//await page.getByLabel('Gmail').click({"button":"right"});



})

// test.afterAll(async({browser})=>{
// await page.getByRole('button', {name: 'Open Menu'}).click();
// await page.getByTestId('logout_sidebar_link').click();

    
// })