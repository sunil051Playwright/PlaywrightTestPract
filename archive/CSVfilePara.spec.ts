import { test } from "@playwright/test"
import fs from "fs"
import { parse } from "csv-parse/sync"

type TestData = {
  ID: string
  Firstname: string
  Lastname: string
}

const records = parse(
  fs.readFileSync("Testdata/testdata.csv",),
  { columns: true, skip_empty_lines: true }
) as TestData[]

records.forEach((record) => {

  test(`test csv parameter - ${record.ID}`, async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form")

    await page.locator("#firstName").fill(record.Firstname)
    await page.locator("#lastName").fill(record.Lastname)

  })

})