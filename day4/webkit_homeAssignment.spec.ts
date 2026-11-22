//Flipkart launched only in webkit
import {test} from "@playwright/test";

test.only("launch Flipkart",async ({page})=>{
    await page.goto("https://www.flipkart.com/")
    console.log(`Page Title ${await page.title()}`)
    console.log(`Page Title ${page.url()}`)
})