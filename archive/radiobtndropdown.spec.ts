import {expect, test} from "@playwright/test"

test("test radio btn", async({page})=>{
await page.goto("https://artoftesting.com/samplesiteforselenium");
// const malerdio = page.locator('#male')
// await malerdio.check();
// await expect(malerdio).toBeChecked();
// await expect(page.locator('#female')).not.toBeChecked();
await page.locator('.Automation').check()
await expect(page.locator('.Automation')).toBeChecked();
await page.locator('.Performance').check()
await expect(page.locator('.Performance')).toBeChecked();
if(await page.locator('.Performance').isChecked()){
console.log("Performance check box is selected")
await page.locator('.Performance').uncheck();
}
}) 

test("practice dropdown",async({page})=>{
await page.goto("https://artoftesting.com/samplesiteforselenium");
//await page.locator('#testingDropdown').selectOption("Performance")
//await page.locator('#testingDropdown').selectOption({label:'Manual Testing'});
await page.locator('#testingDropdown').selectOption({value:'Database'});
})

test("pratice dropdownfor lable",async({page})=>{
await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");
await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption({label:'Mercedes'})
})

test("Practice multi select options",async({page})=>{
await page.goto("https://demoqa.com/select-menu")
await page.locator('#cars').selectOption(['saab','volvo','audi'])
})