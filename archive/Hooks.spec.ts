import {test} from "@playwright/test"

test.beforeAll(async()=>{
    console.log("before all ran successfully")
})

test.describe("practice describe",async()=>{
//test.beforeEach("run before each",async()=>{
   // console.log("before each ran successfully");
//})

test("test 1 to for login", async({page})=>{
console.log("test1 login successfull");
})

test("test 2 to for login", async({page})=>{
console.log("test2 login successfull");
})
//test.afterEach("After each ran successfully", async({page})=>{
  //  console.log("after each ran successfully");
//})

})

test("test 3 to for login", async({page})=>{
console.log("test3 login successfull");
})
test("test 4 to for login", async({page})=>{
console.log("test4 login successfull");
})

test.afterAll(async()=>{
    console.log("after all ran successfully")
})