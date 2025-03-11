import { LoginInputDao } from '../daoLayer/inputDao/loginInputDao';
import HomePage from './home.page';
import { Page } from './page'
import { ChainablePromiseElement } from 'webdriverio';
export default class LoginPage extends Page {

    public getEmailField() : ChainablePromiseElement{
        return  $("//input[@name='email']");
    }
    public getPassword() : ChainablePromiseElement{
        return  $("input[name='password']")
    }

    public getSubmitButton() : ChainablePromiseElement {
        return  $("button[type='submit']");
    }
    
        
    public async fillCredentials(loginInputDao: LoginInputDao): Promise<HomePage> {
        await this.getEmailField().setValue(loginInputDao.getUserName());
        await this.getPassword().setValue(loginInputDao.getPassword());
        await this.getSubmitButton().click();
        return new HomePage; //for method chaining
    }

    public async openURL(): Promise<this> {
        await super.open("account/login");
        return this;
    }
}