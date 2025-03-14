import { LoginInputDao } from '../daoLayer/inputDao/loginInputDao';
import HomePage from './home.page';
import { Page } from './page'
import { ChainablePromiseElement } from 'webdriverio';
import { step } from "@wdio/allure-reporter";
export default class LoginPage extends Page {

    //private bcs internally called
    private getEmailField() : ChainablePromiseElement{
        return  $("//input[@name='email']");
    }
    private getPassword() : ChainablePromiseElement{
        return  $("input[name='password']")
    }
    private getSubmitButton() : ChainablePromiseElement {
        return  $("button[type='submit']");
    }
        
    public async fillCredentials(loginInputDao: LoginInputDao): Promise<HomePage> {
        await step(`User fills the credentials for user ${loginInputDao.getUserName()}`, async (step) => {
            await this.getEmailField().setValue(loginInputDao.getUserName());
            await this.getPassword().setValue(loginInputDao.getPassword());
            await this.getSubmitButton().click();
        })
        return new HomePage(); //for method chaining
    }

    public async openURL(): Promise<this> {
        await step("User Opens the Login URL", async (step) => {
            await super.open("account/login");
        });
        return this;
    }
}