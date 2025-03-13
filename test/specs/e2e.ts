import login from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

import { step } from '@wdio/allure-reporter';
import { readTestCaseDataFromJSOnFile } from '../util/fileutil';

import test from 'node:test';
import * as path from 'path';
import { LoginInputDao } from '../daoLayer/inputDao/loginInputDao';
import AccountPage from '../pageobjects/account.page';
import { validateUserInformation } from '../verificationLayer/verification';
import { AccountOutputDao } from '../daoLayer/outputDao/accountOutputDao';
import { LoginDataLayer } from '../dataLayer/loginDataLayer';
import { HomeDataLayer } from '../dataLayer/homeDataLayer';
import { HomeInputDao } from '../daoLayer/inputDao/homeInputDao';
import { ProductInputDao } from '../daoLayer/inputDao/productInputDao';
import { ProductDataLayer } from '../dataLayer/productDataLayer';
import ProductPage from '../pageobjects/product.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import { CheckoutInputDao } from '../daoLayer/inputDao/checkoutInputDao';
import { CheckoutDataLayer } from '../dataLayer/checkoutDataLayer';


describe("e2e flow", () => {
    it("TC1", async () => {
        //Page Objects
        const loginPage = new login();
        let cartPage: CartPage;
        let checkoutPage: CheckoutPage;
        const accountPage: AccountPage = new AccountPage();
        
        //Data Layer
        const testFilePath = path.join(process.cwd(), "/test/testdata/e2eflow.json");
        const testData = readTestCaseDataFromJSOnFile(testFilePath, "TC1")
        const loginData: LoginDataLayer = testData["login"];
        const homeData: HomeDataLayer = testData["home"];
        const productData: ProductDataLayer = testData["product"];
        const checkoutData: CheckoutDataLayer = testData["checkout"]
        console.log("loginData is", loginData);
        
        //Dao Layer
        const loginInputDao: LoginInputDao = new LoginInputDao(loginData);
        const homeInputDao: HomeInputDao = new HomeInputDao(homeData);
        const productInputDao: ProductInputDao = new ProductInputDao(productData);
        const checkoutInputDao: CheckoutInputDao = new CheckoutInputDao(checkoutData);
        console.log("loginInputDao is:", loginInputDao);
        
        let accountOutputDao: AccountOutputDao;


        await step("User logs in", async() => {
            cartPage = await (await (await (await loginPage.openURL()).fillCredentials(loginInputDao)).clickProductLink(homeInputDao)).fillProductDetails(productInputDao);
        await cartPage.readCartData();
        checkoutPage = await (await cartPage.printCartData()).clickCheckoutButton();
        await (await (await checkoutPage.fillAddressDetails(checkoutInputDao)).selectDeliveryoption()).clickContinueToPayment();
        await (await checkoutPage.selectPaymentMethod()).clickPlaceOrder();


        await browser.debug();
            //const emailOutputData = await (await accountPage.openURL()).getEmailFieldText();
            //accountOutputDao = new AccountOutputDao(emailOutputData)
            //expect(emailOutputData).toEqual(loginInputDao.getUserName());
            //validateUserInformation(loginInputDao, accountOutputDao);
            //await loginPage.fillCredentials("shaileshk@gmail.com", "123456");
            //await homePage.clickProductLink("Nike reach phantom run flyknit 2")
        })
    })
})