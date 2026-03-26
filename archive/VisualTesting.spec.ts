import {expect, test} from "@playwright/test"

test("Visual Testing", async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/tables");
  //await expect(page).toHaveScreenshot();
  //await expect(page).toHaveScreenshot("visualtest.png")
  //await expect(page).toHaveScreenshot(["chiilderfolder1/childforder2","visualtestchild.png"])
  //await expect(page).toHaveScreenshot(["chiilderfolder3","abc2","visualtestchild.png"])
  //await expect(page).toHaveScreenshot("fullpagetest.png",{fullPage:true});
   //await expect(page).toHaveScreenshot("MaxDiffPixelPtice.png", {maxDiffPixels : 700})
   //await expect(page).toHaveScreenshot("MaxDiffPixelratioPtice.png",{maxDiffPixelRatio : 0.5})
   //await expect(page).toHaveScreenshot("masktest.png",{mask :[page.locator("//table['@id = table1']//tbody//tr//td[4]")]})
    //await expect(page).toHaveScreenshot("masktest22.png",{mask :[page.locator("//table['@id = table1']//tbody//tr//td[4]"),page.locator('#table2') ]})
    // await expect(page.locator('#table1')).toHaveScreenshot('singlescreenshot22.png', {mask :[page.locator("//table['@id = table1']//tbody//tr//td[4]")]})
   await expect(page).toHaveScreenshot("Update the screen shot.png")
})

test.only("Visual Testing - Iframe hiding verification", async({page})=>{ 
    await page.goto("https://demoqa.com/forms")
    await expect(page).toHaveScreenshot("iframesc.png",{stylePath : "screenshot.css"})
})

test("non image screen shot", async({page})=>{
    await page.goto("https://playwright.dev/")
    expect(await page.locator(".hero__title.heroTitle_ohkl").textContent()).toMatchSnapshot("headding.txt")

    
})