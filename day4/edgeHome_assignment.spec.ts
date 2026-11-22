//Redbus launched only in msedge
import {test} from "@playwright/test";

test.only("Launch RedBus",async ({page})=>{
    await page.goto("https://www.redbus.in/");
    console.log(`Page Title ${await page.title()}`)
    console.log(`Page Title ${page.url()}`)

})