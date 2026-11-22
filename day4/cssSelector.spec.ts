//Classroom activity 
import {test} from "@playwright/test"

test('Learn css Selector',async ({page})=>{


    
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator(".slds-input").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("button[type='button']").click()
    await page.locator("[aria-label='Password for dilipkumar.rajendran@testleaf.com']").fill('TestLeaf@2025')
    await page.locator("//button[.='Log In']").click()

})