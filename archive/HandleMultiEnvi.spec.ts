import {test} from "@playwright/test"

test("Multiple environment test",async({page})=>{
  console.log(process.env.URL)
  console.log(process.env.USERNAME1)
  console.log(process.env.PASSWORD)
  const urlval = process.env.URL as string;
  await page.goto(urlval)
  await page.locator('#user-name').fill(process.env.USERNAME1 as string)
  await page.locator('#password').fill(process.env.PASSWORD as string)
  await page.waitForTimeout(8000)
 // await page.locator('#login-button').click()
})