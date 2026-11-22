// two separate files are created for this task to run it parallelly in two browsers , testMatch is used in Config file to execute this task .    
import {test} from "@playwright/test";

test("Launch RedBus",async ({page})=>{
    await page.goto("https://www.redbus.in/");
    console.log(page.title())
    console.log(page.url())

})

test("launch Flipkart",async ({page})=>{
    await page.goto("https://www.flipkart.com/")
    console.log(`Page Title ${page.title()}`)
    console.log(`Page Title ${page.url()}`)
})