describe("Practice", () => {
    xit ("TC1", async () => {
        await browser.url("account/login");
        //Xpath
        await browser.$("//input[@name='email']").addValue("shaileshk@gmail.com")
        //CSS Path
        await browser.$("input[name='password']").addValue("123456");
        const passwordText = await $("input[name='password']").getText();
        console.log("pwd is: ", passwordText);
        
        const passwordAttribute = await $("input[name='password']").getAttribute("placeholder");
        console.log("placeholder is ", passwordAttribute);
    
        const cssProprety = await $("input[name='password']").getCSSProperty("font-family")
        console.log("CSS property is ", cssProprety);

        //without Browswer method
        //await $("button[type='submit']").click();
        console.log("End of Scirpt");
    })
    xit("dropdown Execution", async () => {
        await browser.url("https://selectorshub.com/xpath-practice-page/");
        await $("(select[id='cars']").selectByIndex(2); //opel
        await $("(select[id='cars']").selectByVisibleText("Audi");
        console.log("Passed")
    })
    it("non slect dropdown"), async () => {
        await browser.url("https://selectorshub.com/xpath-practice-page/");
        const dropdownOptions = await $$("select[id=cars] option");
        for (const option of dropdownOptions) {
            const value = await option.getText();
            if (value === 'Opel') {
                await option.click();
                console.log("Paased hurray")
            }
        }
    }
})