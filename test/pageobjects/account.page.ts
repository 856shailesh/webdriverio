import {Page} from './page'
import {ChainablePromiseElement} from 'webdriverio';

export default class AccountPage extends Page {

    public emailFieldTextBox(): ChainablePromiseElement {
        return  $$(`.account-details-email div`)[1];
    }

    public async getEmailFieldText(): Promise<string> {
        return await this.emailFieldTextBox().getText();             
    }

    public async openURL(): Promise<this> {
        await super.open("/account");
        return this;
   }

}