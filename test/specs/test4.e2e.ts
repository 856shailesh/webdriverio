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
    xit("Day 12 implement waits", async () => {
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
    xit("Day 13 web tables", async () => {
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
        await $("//a[text()='X']").click();
        await browser.waitUntil(async () => {
            let classvalue = await $("//a[text()='X']/parent::li").getAttribute("class");
            if (classvalue === 'selected') return true;
            else return false;
        }, { timeout: 5000, timeoutMsg: "Didn't attained selected value" });
        await $("//a[text()='Green']").click();
        await browser.waitUntil(async () => {
            let classvalue = await $("//a[text()='Green']/parent::li").getAttribute("class");
            if (classvalue === 'selected') return true;
            else return false;
        }, { timeout: 5000, timeoutMsg: "Didn't selected color" });
        await $("input[name = 'qty']").setValue(3);
        await $("button[type = 'button'] span").click();
        //View Cart Popup
        await $("a.add-cart-popup-button").click();
        console.log("End of Script");
    })
    xit("Day 14 tables row iframe", async () => {
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
        await $("//a[text()='X']").click();
        await browser.waitUntil(async () => {
            let classvalue = await $("//a[text()='X']/parent::li").getAttribute("class");
            if (classvalue === 'selected') return true;
            else return false;
        }, { timeout: 5000, timeoutMsg: "Didn't attained selected value" });
        await $("//a[text()='Green']").click();
        await browser.waitUntil(async () => {
            let classvalue = await $("//a[text()='Green']/parent::li").getAttribute("class");
            if (classvalue === 'selected') return true;
            else return false;
        }, { timeout: 5000, timeoutMsg: "Didn't selected color" });
        await $("input[name = 'qty']").setValue(3);
        await $("button[type = 'button'] span").click();
        await $("a.add-cart-popup-button").click();
        /* Checkout Page
        const rows = await $$("//table[@class='items-table listing']/tbody/tr/td");
        const rowCount = await rows.length;
        console.log("Total number of rows", rowCount);
        
        const rowData: string[] = [];
        const productDetail = await $("//table[@class='items-table listing']/tbody/tr[1]/td[1]//div[@class='cart-tem-info']/a").getText();
        const productPrice = await $("//table[@class='items-table listing']/tbody/tr[1]//td[2]//span[@class='sale-price']").getText();
        const productQty = await $("//table[@class='items-table listing']/tbody/tr[1]//td[3]//input[@type='text']").getAttribute('value');
        const productTotalPrice = await $("//table[@class='items-table listing']/tbody/tr[1]/td[4]//span").getText();

        rowData.push(productDetail);
        rowData.push(productPrice);
        rowData.push(productQty);
        rowData.push(productTotalPrice);

        rowData.forEach((val, index) => {
            console.log(`Cell ${index + 1} text is : ${val}`);
        }) */
        const rows = await $$("//table[@class='items-table listing']/tbody/tr");
        const rowCount = await rows.length;
        console.log("Total number of rows", rowCount);

        const rowsData: string[][] = []; // Intitialize 2D array
        //read all rows data at once
        for (let i = 0; i < rowCount; i++){
            const rowData: string[] = []; //For every product
            const productDetail = await rows[i].$("//td[1]//div[@class='cart-tem-info']/a").getText();
            const productPrice = await rows[i].$("//td[2]//span[@class='sale-price']").getText();
            const productQty = await rows[i].$("//td[3]//input[@type='text']").getAttribute('value');
            const productTotalPrice = await rows[i].$("//td[4]//span").getText();

            rowData.push(productDetail);
            rowData.push(productPrice);
            rowData.push(productQty);
            rowData.push(productTotalPrice);
            rowsData.push(rowData);
        }
        //Print The tabel
        for (const rowData of rowsData) {
            rowData.forEach((val, index) => {
                console.log(`Cell ${index + 1} text is ${val}`);
            })
            console.log(" ------ ***** ------- ****** --------")
        }
    })
    xit("Day 15 , iframes" , async () => {
        await browser.url("https://selectorshub.com/iframe-scenario/");
        await browser.maximizeWindow();
        //Switch to frame , using frame ID
        await browser.switchFrame($("//iframe[@id='pact1']"));
        await $("//input[@id='inp_val']").setValue("shailesh Kumar")
        //Switch to iFrmae using URL
        await browser.switchFrame($("//iframe[@src='https://selectorshub.com/input-box/']"));
        await $("//input[@id='jex']").setValue("lol");
        //Switch to 3rd IFrame using more values
        await browser.switchFrame($("//iframe[@loading='lazy' and @height='65px']"));
        await $("//input[@placeholder='Destiny']").setValue("Double Lol");

        //Switch to original Frame and Get Some value
        await browser.switchFrame(null); // This will go to initial frame
        let header = await $("//a[text()='SELECTORSHUB']").getText();
        console.log("End of script with header " , header);
    })
    it("Day 15 , Shadow DOMS" , async () => {
        await browser.url("https://selectorshub.com/shadow-dom-in-iframe/");
        await browser.maximizeWindow();

        await browser.switchFrame($("//iframe[@id='pact']"));
        await $("//div[@id='snacktime']").waitForDisplayed({ timeout: 20000 });

        await browser.$("div#snacktime").shadow$("//input[@id='tea']").setValue("Yes I might be");
        
    })
}) 