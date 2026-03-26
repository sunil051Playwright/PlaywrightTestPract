import { expect, test } from "@playwright/test";

test("Alert dialog", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.once("dialog", async dialog => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("I am a JS Alert");
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Click for JS Alert" }).click();
  await expect(page.locator("#result"))
    .toHaveText("You successfully clicked an alert");
});


test("Confirm dialog", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.once("dialog", async dialog => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toBe("I am a JS Confirm");
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Click for JS Confirm" }).click();
  await expect(page.locator("#result"))
    .toHaveText("You clicked: Ok");
});


test("Prompt dialog", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.once("dialog", async dialog => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toBe("I am a JS Prompt");
    await dialog.accept("Playwright");
  });

  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
  await expect(page.locator("#result"))
    .toHaveText("You entered: Playwright");
});


test("iframe with name (better way)", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");

  const frame = page.frameLocator("#iframeResult");
  await frame.locator("#fname").fill("playwright automate");
});


test("iframe with locator", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_iframe.asp");

  const frame = page.frameLocator("[title='W3Schools HTML Tutorial']");
  await frame.getByRole("button", { name: "Button to open search field" }).click();
  await frame.getByRole("textbox", { name: "Search field" })
    .fill("test automate playwright");
});