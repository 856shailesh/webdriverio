import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

/*
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})
*/

describe('Scneario 1', () => {
    it("TC1", async () => {
        console.log("Hello");
        await browser.url("https://demo.evershop.io/account/login")
        console.log("World");
        await browser.$("input[name='email']").setValue("856shaileshk@gmail.com");
        console.log("completed");
    })
})
