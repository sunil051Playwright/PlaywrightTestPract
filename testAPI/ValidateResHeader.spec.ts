import {expect, test} from "@playwright/test"

test("test response header",async({request})=>{
 const resHeader = await request.get("/booking/1")
 const headerVal = resHeader.headers();
 console.log(headerVal);
 expect(headerVal.server).toEqual("Heroku")
 expect(headerVal["x-powered-by"]).toEqual("Express")

 console.log("==============================================================================")

 const headerarryVal = resHeader.headersArray();
 console.log(headerarryVal);
 expect(headerarryVal.length).toBe(10)
 headerarryVal.forEach((header)=>{
  console.log(header.name + "::" + header.value)
 })

})