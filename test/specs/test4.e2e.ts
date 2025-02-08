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
    xit("timeout execution", async () => {
        await browser.url("xpath-practice-page/");
        const timeouts = await browser.getTimeouts();
        console.log("Before Timeouts are : ", timeouts);
        
        await browser.setTimeouts(0, 3000);
        const timeouts1 = await browser.getTimeouts();
        console.log("After Timeouts are : ", timeouts1);
    })
    xit("Day 11 waiting strategy", async () => {
        await browser.url("xpath-practice-page/");
        const timeouts = await browser.getTimeouts();
        console.log(" Timeouts are : ", timeouts);
    })
    it("Day 12 implement waits", async () => {
        await browser.url("/account/login");
        await browser.maximizeWindow();
        await $("input[name=email]").setValue("856shaileshk@gmail.com")
        await $("input[name=password]").setValue("123456")
        await $("button[type=submit]").click();
        //Home 
        await $("//a/span[text()='Nike react phantom run flyknit 2']").click();
        //Product
        const productName = await $("h1.product-single-name").getText();
        console.log("Product name is ", productName)
        //click not happening here , need to wait
        await $("//a[text()='X']").click();
        await browser.waitUntil(async () => {
            let classvalue = await $("//a[text()='X']/parent::li").getAttribute("class");
            if (classvalue === 'selected12') return true;
            else return false;
        }, { timeout: 5000, timeoutMsg: "Didn't attained selected value" });
        await $("//a[text()='Green']").click();
        await $("input[name = 'qty']").setValue(3);
        await $("button[type = 'button'] span").click();
        console.log("End of Script");
    })
})