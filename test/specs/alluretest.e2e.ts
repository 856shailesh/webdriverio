describe("Allure scneario", () => {
    it("Allure TC1", async () => {
        await browser.url("https://www.google.com");
        expect(true).toBeFalse();
    })
})