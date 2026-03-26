import {expect, test} from "@playwright/test"

test("test the login and homepage",async({page})=>{
  
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.getByTestId('product-sort-container').selectOption({value : 'za'})
})

test("test the add to cat",async({page})=>{
    
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveValue('1');

})
