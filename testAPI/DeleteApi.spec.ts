import {expect, test} from "@playwright/test"

test("validate delete API",async({request})=>{
       const respodelet = await request.delete("/booking/1")
    expect(respodelet.status()).toBe(201)
     const resptext = await respodelet.text();
     expect(resptext).toEqual("Created")

     const respget = await request.get("/booking/1");
     console.log(respget.status())
     expect(respget.status()).toBe(404)

})