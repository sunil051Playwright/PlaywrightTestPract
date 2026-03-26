import {test} from "@playwright/test"

test("practice keyboard actions",async({page})=>{
  await page.goto("https://testpages.eviltester.com/pages/forms/html-form/")
  const commentscopy = page.locator("[name='comments']");
  await commentscopy.press("Control+a");
  await commentscopy.press("Backspace");
  await commentscopy.press("a+B+C+p");
  await commentscopy.press("Control+a+x")
  const passwordfield = page.locator("[name ='password']");
  await passwordfield.press("Control+v");
  await passwordfield.press("ArrowLeft+ArrowLeft+ArrowLeft")
  await passwordfield.press("s")
  await page.keyboard.press("PageDown")
  await page.keyboard.press("PageUp")
})