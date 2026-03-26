 import {test} from "@playwright/test"

 test.describe("describe blpck",{tag:'@Sanity'},async()=>{
      test("practice test1 @UI", async({page})=>{
      console.log("practice test1");
 })
      test("practice test2 @Funtional", async({page})=>{
      console.log("practice test2");
 })
      test("practice test3 @Smoke", async({page})=>{
      console.log("practice test3");
 })
 }) 

 test("practice test4",{tag:['@Smoke','@Sanity']}, async({page})=>{
   console.log("practice test4");
    
 })

 test("practice test5",{tag:'@Sanity'}, async({page})=>{
   console.log("practice test5");
    
 })