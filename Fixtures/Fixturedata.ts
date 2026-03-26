import {test as basetest} from "@playwright/test"

type myFixture={
  LoginData : any;
  testData : any;
}
export const test = basetest.extend<myFixture>({
      LoginData: {
        username : "Admin",
        Pwd : "admin123",
      },
      testData:{
          fname : "sunildf",
          mname : "mddfff",
          lname : "pawaerr",
          email : "testfix@yopmail.com",
          mob : "488489494954"
      }
})