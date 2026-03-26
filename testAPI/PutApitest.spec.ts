import {expect, test} from "@playwright/test"

test("API call for post call",async({request})=>{
   const respo1 =  await request.put("/booking/19", {
     headers : {
         Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM=",
         //"Content-Type": "application/json"
     },
     data:{
    "firstname" : "James11",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
     }})
   const respjson = await respo1.json();
   console.log(respjson)
   expect(respo1.status()).toBe(200)
   expect(respjson.firstname).toEqual("James11")
// Get call to check the updated data
   const getresp = await request.get("/booking/19");
   console.log(await getresp.json())
   expect(await getresp.json()).toMatchObject({
     firstname: 'James11',
  lastname: 'Brown',
  totalprice: 111,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
  additionalneeds: 'Breakfast'

   })
 
})