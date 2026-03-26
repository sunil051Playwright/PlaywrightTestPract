import {expect, test} from "@playwright/test"

test("Reporter practice 1", async({page})=>{
await page.goto('https://www.saucedemo.com/')
await expect(page).toHaveTitle('Swag Labs')

})

test("Reporter practice 2", async({page})=>{
await page.goto('https://www.saucedemo.com/')
await expect(page).toHaveTitle('Swag Labs')
})

test("Reporter practice 3", async({page})=>{
await page.goto('https://www.saucedemo.com/')
await expect(page).toHaveTitle('Swag Labs')
})

test("Reporter practice 4", async({page})=>{
await page.goto('https://www.saucedemo.com/')
await expect(page).toHaveTitle('Swag Labs')
})