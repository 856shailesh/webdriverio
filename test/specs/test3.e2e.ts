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
        //console.log("Started")
        
        //await browser.url("account/login");
        //await browser.navigateTo("https://google.com");
        /*
        await browser.back();
        await browser.forward();
        await browser.minimizeWindow();
        await browser.maximizeWindow();
        await browser.refresh();
        await browser.close(); 
        await browser.url("account/login");
        const firstHandle = await browser.getWindowHandle();
        console.log('First handle is :', firstHandle);
        await browser.newWindow("https://google.com");
        const sencondHandle = await browser.getWindowHandle();
        console.log('second handle is :', sencondHandle);

        const handles = await browser.getWindowHandles();
        console.log("all handles", handles);
        //switching of windows(tabs)
        const currentURL = await browser.getUrl();
        const currentTitle = await browser.getTitle();
        console.log("Opened URL is ", currentURL, "title is", currentTitle)
        
        //await browser.switchToWindow(firstHandle);
        await browser.switchToWindow(currentTitle);
        const currentURL1 = await browser.getUrl();
        const currentTitle1 = await browser.getTitle();
        console.log("Opened URL is ", currentURL1, "title is", currentTitle1)
        console.log("End");
        
        await browser.url("account/login");
        await browser.setWindowSize(200,400);
        await browser.setWindowRect(50, 100, 500, 300);
        const rect = await browser.getWindowRect();
        console.log("Rect position is ",rect)
        const size = await browser.getWindowSize();
        console.log("Window size" , size)
        */
        //const session = await browser.sessionId;
        //console.log("Current session ID : ", session)
        //await browser.refresh();
        //await browser.reloadSession();
        //console.log("New session ID : ", session)

        //await browser.newSession(browser.capabilities);
        //console.log("new capabilites" , browser.capabilities)
        //const session1 = await browser.sessionId;
        //console.log("Current session ID : ", session1)
        
        await browser.url("account/login");
        const cookies1 = await browser.getAllCookies();
        console.log("All Cookies", cookies1)
        await browser.addCookie({ name: "demo1", value: "shailesh" });
        await browser.setCookies([{ name: "demo2", value: "test" }, { name: "demo3", value: "test3" }])
        const cookies2 = await browser.getAllCookies();
        console.log("All Cookies after add", cookies2)
        //await browser.deleteAllCookies();
        //await browser.deleteCookie('sid');
        //const cookies2 = await browser.getAllCookies();
        //console.log("All Cookies after delete",cookies2)
        
    })
})
