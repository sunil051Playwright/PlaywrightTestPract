import {test, expect} from "@playwright/test"
import ApiData from "../Testdata/ApiData.json"
import APIAuthCred from "../Testdata/APIAuthCred.json"

test("test auth", async({request})=>{
const resAuth = await request.put("/booking/8",{
    data:ApiData,
})

})

let tokenvalue: string;

test.beforeAll(async ({ request }) => {
  const AuthRes = await request.post("/auth", {
    data: APIAuthCred,
  });

  const body = await AuthRes.json();
  tokenvalue = body.token;

  console.log("Token:", tokenvalue);
});

test("test put method test", async ({ request }) => {
  const putresp = await request.put("/booking/39", {
    headers: {
      Cookie: `token=${tokenvalue}`, // ✅ FIXED
    },
    data: ApiData,
  });

  console.log("Status:", putresp.status());
  console.log(await putresp.text()); // safer than .json()

  expect(putresp.status()).toBe(200);
});

test("Delete with auttth", async ({ request }) => {
  const deletres = await request.delete("/booking/39", {
    headers: {
      Cookie: `token=${tokenvalue}`, // ✅ FIXED
    },
  });

  console.log("Delete status:", deletres.status());
  expect(deletres.status()).toBe(201);
});