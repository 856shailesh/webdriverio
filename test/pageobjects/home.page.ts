import { ChainablePromiseElement } from 'webdriverio';
import { Page } from './page'


export default class HomePage extends Page {
    public getProductLink(productName: string): ChainablePromiseElement {
        return  $(`//a/span[text()='${productName}']`);
    }

    public async clickProductLink(productName: string): Promise<this> {
        await this.getProductLink(productName).click();      
        return this;
    }

    public async openURL(): Promise<this> {
        await super.open("/");
        return this;
    }
}