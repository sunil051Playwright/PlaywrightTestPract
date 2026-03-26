import {test,expect} from "@playwright/test"
import ApiData from "../Testdata/ApiData.json"
import RestrApiData from "../Testdata/RestrApiData.json"

test("API call for post call",async({request})=>{
   const respo1 =  await request.put("/booking/19", {
     headers : {
         Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM=",
         //"Content-Type": "application/json"
     },
     data:ApiData,
    });
   const respjson = await respo1.json();
   console.log(respjson)
   expect(respo1.status()).toBe(200)
   expect(respjson.firstname).toEqual("James11")
// Get call to check the updated data
   const getresp = await request.get("/booking/19");
   console.log(await getresp.json())
   expect(await getresp.json()).toMatchObject(ApiData)
})


test("Post API test", async({request})=>{
const res1 = await request.post("/booking", {
  data :ApiData
})
const resjson = await res1.json();
console.log(resjson)
//expect(res1.status()).toBe(200);
//expect(res1.ok()).toBeTruthy();
//expect(res1.statusText()).toBe("OK");
expect(resjson.booking).toMatchObject(ApiData)
expect(resjson.booking.lastname).toEqual(ApiData.lastname)
})

test("API call for post call with restruturted data",async({request})=>{
   const respo1 =  await request.put("/booking/19", {
     headers : {
         Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM=",
         //"Content-Type": "application/json"
     },
     data:RestrApiData.PustJson,
    });
   const respjson = await respo1.json();
   console.log(respjson)
   expect(respo1.status()).toBe(200)
   expect(respjson.firstname).toEqual("James11")
// Get call to check the updated data
   const getresp = await request.get("/booking/19");
   console.log(await getresp.json())
   expect(await getresp.json()).toMatchObject(RestrApiData.PustJson)
})


test("Post API test restruturted data", async({request})=>{
const res1 = await request.post("/booking", {
  data :RestrApiData.PostJson
})
const resjson = await res1.json();
console.log(resjson)
//expect(res1.status()).toBe(200);
//expect(res1.ok()).toBeTruthy();
//expect(res1.statusText()).toBe("OK");
expect(resjson.booking).toMatchObject(RestrApiData.PostJson)
expect(resjson.booking.lastname).toEqual(RestrApiData.PostJson.lastname)
})