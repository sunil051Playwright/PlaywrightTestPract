import {expect, test} from "@playwright/test"

test("API call for post call",async({request})=>{
   const respo11 =  await request.patch("/booking/11", {
     headers : {
         Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM=",
         //"Content-Type": "application/json"
     },
     data:{
    "firstname" : "James1134",
    "lastname" : "Brownn",
   
    }
   
     })
   const respjson = await respo11.json();
   console.log(respjson)
   expect(respo11.status()).toBe(200)
   expect(respjson.firstname).toEqual("James1134")
// Get call to check the updated data
   const getresp = await request.get("/booking/11");
   console.log(await getresp.json())
   expect(await getresp.json()).toMatchObject({
     "firstname" : "James1134",
    "lastname" : "Brownn",

   })
 
})