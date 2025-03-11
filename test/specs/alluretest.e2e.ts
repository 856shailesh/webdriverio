import { addEpic, addFeature, addOwner, addSeverity, addStory, addTag } from "@wdio/allure-reporter";
import { addDescription, TYPE } from "@wdio/allure-reporter";
describe("Allure scneario", () => {
    it("Allure TC1", async () => {
        addEpic("Login");
        addFeature("Valid Login");
        addStory("Authentication");
        addDescription("Attempt to log into the website.", TYPE.MARKDOWN);
        addOwner("Shailesh Kumar");
        addTag("PositiveTest");
        addSeverity("Blocker");
        await browser.url("https://www.google.com");
        expect(true).toBeFalse();
        console.log("TC failed");
    })
})