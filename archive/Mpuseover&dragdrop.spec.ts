import {expect, test} from "@playwright/test"

test("test mouse over", async({page})=>{
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    await page.getByText('About Me').nth(1).hover();
    await page.getByRole('link', { name: 'Online Training Feedback' }).click();
})

test("verify drag and drop 1", async ({ page }) => {

    // method 1
 await page.goto("https://vinothqaacademy.com/mouse-event/");

//   const source = page.locator("#draggable");
//   const target = page.locator("#droppable");

//   await source.scrollIntoViewIfNeeded();
//   await target.scrollIntoViewIfNeeded();

//   await source.dragTo(target);

//   await expect(target).toContainText("Dropped!");

//method 2

await page.getByText('Drag Me').dragTo(page.getByText('Drop Here'))

});

