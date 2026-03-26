import {test, expect} from "@playwright/test"


test("save login details",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
      await page.locator("#user-name").fill("standard_user");
      await page.locator("#password").fill("secret_sauce");
      await page.locator('#login-button').click();
      await page.waitForURL("https://www.saucedemo.com/inventory.html");
      await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs');
      await page.context().storageState({path:"playwright/.auth/auth.json"})

    

})