import { expect, test } from "@playwright/test";

test("handle new page", async({context})=>{
const page = await context.newPage();
await page.goto("https://demoqa.com/browser-windows")
//await expect(page).toHaveTitle("")
const prmpage = context.waitForEvent("page")
await page.locator("#tabButton").click();
const newpagee = await prmpage;
await expect(newpagee.getByText("This is a sample page")).toHaveText("This is a sample page");

})