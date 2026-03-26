import {test} from "@playwright/test";

test("start playwright",async({page})=>{

    await page.goto("https://www.google.com")
    await page.getByRole('button', { name: 'Not interested' }).click();
    await page.getByRole('button', { name: 'Google apps' }).click();
    await page.getByRole('link', { name: 'Sign in' }).click();
    

    console.log("Hi Playwright")

})

test("second test", ()=>{

        console.log("Hi Playwright for 2nd test")

})