import {test, expect} from "@playwright/test"
import dataArrya from "../Testdata/testdata1.json"
import logindata from "../Testdata/Logindata.json"

test.beforeEach("test parameterzation", async({page})=>{
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page.getByRole('textbox',{name : 'username'}).fill(logindata.username)
      await page.getByRole('textbox',{name: 'password'}).fill(logindata.password)
      await page.getByRole('button', { name: 'Login' }).click();
})
dataArrya.forEach((data)=>{
test("add candidate" +data.FName ,async({page})=>{
await page.getByRole('link', { name: 'Recruitment' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
await page.getByRole('textbox', { name: 'First Name'}).fill(data.FName);
await page.getByRole('textbox', { name: 'Middle Name'}).fill(data.MName);
await page.getByRole('textbox', { name: 'Last Name' }).fill(data.LName);
await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email);
await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(data.Mobile)
await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toBeVisible({ timeout: 10000 });
//await expect(page).toHaveURL(/viewCandidate/);
})

})



