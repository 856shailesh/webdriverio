describe("day10", () => {
    xit("non select dropdown", async () => {
        await browser.url("xpath-practice-page/");
        const dropdownOptions = await $$("select[id=cars] option");
        for (const option of dropdownOptions) {
            const value = await option.getText();
            if (value === 'Opel') {
                await option.click();
                console.log("Paased hurray")
            }
        }
    })
    it("timeout execution", async () => {
        await browser.url("xpath-practice-page/");
        const timeouts = await browser.getTimeouts();
        console.log("Before Timeouts are : ", timeouts);
        
        await browser.setTimeouts(0, 3000);
        const timeouts1 = await browser.getTimeouts();
        console.log("After Timeouts are : ", timeouts1);
    })
})