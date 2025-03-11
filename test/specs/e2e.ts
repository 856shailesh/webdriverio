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
import { LoginDataLayer } from '../dataLayer/LoginDataLayer';


describe("e2e flow", () => {
    it("TC1", async () => {
        const loginPage = new login();
        const homePage = new HomePage();
        //const cwd = process.cwd(); // current working directory
        const testFilePath = path.join(process.cwd(), "/test/testdata/e2eflow.json");
        const testData = readTestCaseDataFromJSOnFile(testFilePath, "TC1")
        
        const loginData: LoginDataLayer = testData["login"];
        console.log("loginData is", loginData);
        const loginInputDao: LoginInputDao = new LoginInputDao(loginData);
        console.log("loginInputDao is:", loginInputDao);
        const accountPage: AccountPage = new AccountPage();
        let accountOutputDao: AccountOutputDao;


        await step("User logs in", async() => {
            await ((await (await loginPage.openURL()).fillCredentials(loginInputDao)).clickProductLink("Nike react phantom run flyknit 2"));
            
            const emailOutputData = await (await accountPage.openURL()).getEmailFieldText();
            accountOutputDao = new AccountOutputDao(emailOutputData)
            //expect(emailOutputData).toEqual(loginInputDao.getUserName());
            validateUserInformation(loginInputDao, accountOutputDao);
            //await loginPage.fillCredentials("shaileshk@gmail.com", "123456");
            //await homePage.clickProductLink("Nike reach phantom run flyknit 2")
        })
    })
})