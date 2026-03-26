 import {test} from "@playwright/test"

 test.describe("describe blpck",{
      tag : '@UI',
      annotation: [{
        type : "Jira Story",
        description : "www.google.com"
      }]
 },async()=>{
      test("practice test1", async({page})=>{
      console.log("practice test1");
 })
      test("practice test2", async({page})=>{
      console.log("practice test2");
 })
      test("practice test3", async({page})=>{
      console.log("practice test3");
 })
 }) 

 test.skip("practice test4",{
    annotation: [{ 
        type: "skip the test",
        description : "Practice annotations to skip test"
    },{
        type: "Jira story",
        description : "www.google.com"
    }]
    }, async({page})=>{
   console.log("practice test4");
    
 })

 test("practice test5", async({page})=>{
   console.log("practice test5");
    
 })