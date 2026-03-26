import {test} from "@playwright/test";

test.describe("practivce grouping", async()=>{
//test.skip(({browserName})=>browserName=="firefox")
test.fail(({ browserName }) => browserName === "firefox");
test("test1 to test grouping", async({page})=>{

console.log("test1 this grouping feature")

})

test("test2 to test grouping", async({page})=>{
console.log("test2 this grouping feature")
    
})

test("test3 to test grouping", async({page})=>{
console.log("test3 this grouping feature")
    
})
})
test("test4 to test grouping", async({page})=>{
console.log("test4 this grouping feature")
    
})

test("test5 to test grouping", async({page, browserName})=>{
//test.skip(browserName=="firefox")
console.log("test5 this grouping feature")
    
})