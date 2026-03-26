import {test, request, expect} from "@playwright/test"
import { json } from "node:stream/consumers"

let reqContext2
test.beforeAll("before all baseurl",async()=>{
     reqContext2 = await request.newContext({
        baseURL : "https://restful-booker.herokuapp.com",
         extraHTTPHeaders: {
               Accept: "application/json"
    }
    })
})

test("GET API test", async({request})=>{
   const respo = await request.get("https://restful-booker.herokuapp.com/booking",{
      headers: {
         Accept: "application/json"
      }
   } )
   console.log(await respo.json())

})

test("GET API test2", async () => {
 const reqContext = await request.newContext({
    baseURL : "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
               Accept: "application/json"
    }
 })
  const response = await reqContext.get("/booking");
  console.log(await response.json());
});

// test("GET API test 3", async()=>{
//    const respo2 = await reqContext2.get("/booking")
//    console.log(await respo2.json())

// })

test("GET API test 4", async({request})=>{
   const respo3 = await request.get("/booking/635")
   console.log(await respo3.json())
})

test("GET API test 5", async({request})=>{
   const respo3 = await request.get("/booking/?firstname=John&lastname=Smith")
   console.log(await respo3.json())
})

test("GET API test 6", async({request})=>{
   const respo3 = await request.get("/booking", {
      params:{
         firstname :"John",
         lastname :"Smith"
      }
   })
   console.log(await respo3.json())
})

test("GET API test 7", async({request})=>{
   const respo3 = await request.get("/booking/635")
   console.log(await respo3.json());
   expect(respo3.status()).toBe(200);
   expect(respo3.ok()).toBeTruthy();
//    expect(await respo3.json()).toMatchObject({
//  firstname: 'Josh',
//   lastname: 'Allen',
//   totalprice: 111,
//   depositpaid: true,
//   bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
//   additionalneeds: 'super bowls'
//    })

   const jsonresp = await respo3.json()
   expect(jsonresp.firstname).toEqual('Josh')
})

test("GET API test with UI", async({request, page})=>{
   const respoui = await request.get("https://api.demoblaze.com/entries");
   const jsonrepoui1 = await respoui.json();
  // console.log(await respoui.json())
  console.log(jsonrepoui1.Items[0])
  await page.goto("https://demoblaze.com/")
  await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsonrepoui1.Items[0].title)

})