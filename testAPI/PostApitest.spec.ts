import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/Login";

test("Post API test", async({request})=>{
const res1 = await request.post("/booking", {
  data : {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
  }
})
const resjson = await res1.json();
console.log(resjson)
//expect(res1.status()).toBe(200);
//expect(res1.ok()).toBeTruthy();
//expect(res1.statusText()).toBe("OK");
expect(resjson.booking).toMatchObject({
  firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'

})
expect(resjson.booking.lastname).toEqual("Brown")
})

test("API UI test", async({request, page})=>{
 const respo = await request.post("https://api.demoblaze.com/addtocart", {
  data:{
    "id": "30707c6f-d6bb-e4f2-4f88-a34ef76844e5",
    "cookie": "user=1221f453-453f-3b30-7939-a0f9247d0b51",
    "prod_id": 3,
    "flag": false
  }
 } )
 expect(respo.status()).toBe(200);
 const loginpageObj1 = new LoginPage(page)
 await page.goto("https://demoblaze.com/")
 await page.locator("#login2").click()
 await loginpageObj1.LoginPageAPI("spawar","test@123")
 await page.locator("#cartur").click();
 await expect(page.getByRole('cell', { name: 'Nexus' }).first()).toBeVisible();
})