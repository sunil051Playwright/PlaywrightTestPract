import {test,expect } from "@playwright/test"

test("practice file upload", async({page})=>{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//single file
//await page.locator("#filesToUpload").setInputFiles("Toupload/file1.txt")  
await page.locator("#filesToUpload").setInputFiles(["Toupload/file1.txt","Toupload/file2.xlsx","Toupload/file3.docx"])
await expect(page.getByText('file1.txt')).toHaveText('file1.txt');
await page.locator("#filesToUpload").setInputFiles([]);
})


test("practice file upload2", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const eventselectedpromise =  page.waitForEvent("filechooser");
    await page.locator("#drag-drop-upload").click();
    const fileuploadd = await eventselectedpromise;
    //single file
    //await fileuploadd.setFiles("Toupload/file2.xlsx")
    //multifile upload
    await fileuploadd.setFiles(["Toupload/file2.xlsx", "Toupload/file1.txt"])

    
})