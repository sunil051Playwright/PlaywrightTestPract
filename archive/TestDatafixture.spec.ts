import {expect} from "@playwright/test"
import {test} from "../Fixtures/Fixturedata"


test.beforeEach("test parameterzation", async({page, LoginData})=>{
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page.getByRole('textbox',{name : 'username'}).fill(LoginData.username)
      await page.getByRole('textbox',{name: 'password'}).fill(LoginData.Pwd)
      await page.getByRole('button', { name: 'Login' }).click();
})

test("add candidate" ,async({page,testData})=>{
await page.getByRole('link', { name: 'Recruitment' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
await page.getByRole('textbox', { name: 'First Name'}).fill(testData.fname);
await page.getByRole('textbox', { name: 'Middle Name'}).fill(testData.mname);
await page.getByRole('textbox', { name: 'Last Name' }).fill(testData.lname);
await page.getByRole('textbox', { name: 'Type here' }).first().fill(testData.email);
await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(testData.mob)
await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toBeVisible({ timeout: 70000 });
//await expect(page).toHaveURL(/viewCandidate/);
})



