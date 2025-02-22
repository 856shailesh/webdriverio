import { expect,setOptions } from "expect-webdriverio";
describe("Validate Expect Assertions", () => {
    xit("Defautl Jasmine assertion", async () => {
        //local setting for waits , global : conf file
        setOptions({
            wait: 2000,
            interval:200
        })

        await browser.url("account/login"); //pageLoad
        await browser.$("//input[@name='email']").setValue("shaileshk@gmail.com")
        await browser.$("input[name='password']").setValue("123456");

        const expectedData = "SIGN IN"
        const actual = await $("button[type='submit']").getText();
        //this expect coming from Jasmine
        //expect(actual).toEqual(expectedData); // Assertion by Jasmine
        //expect(actual).toEqual(expectedData); // Assertion by WDIO Jasmine
        const ele = await $("button[type='submit']"); 
        await expect(ele).toHaveText(expectedData); // Assertion by WDIO Jasmine
        console.log("End of script")
    })

    it("Hiding button test scroll", async () => {
        await browser.url("https://practice.expandtesting.com/scrollbars");
        const element = await $("//div[@style='height:150px;overflow-y: scroll;width:300px;overflow-x:scroll']//button");
        await element.scrollIntoView();
        const text = await element.getText();
        console.log("Text is ", text)
    })
})