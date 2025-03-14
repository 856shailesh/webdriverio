import { ChainablePromiseElement } from 'webdriverio';
import { Page } from './page'
import { HomeInputDao } from '../daoLayer/inputDao/homeInputDao';
import ProductPage from './product.page';
import { step } from "@wdio/allure-reporter";

export default class HomePage extends Page {
    //private so that no one can directly call it , 
    //also this is internal to next class
    private getProductLink(productName: string): ChainablePromiseElement {
        return  $(`//a/span[text()='${productName}']`);
    }
    public async clickProductLink(homeInputDao: HomeInputDao): Promise<ProductPage> {
        await step(`User select the product ${homeInputDao.getProductName()}`, async (step) => {
            await this.getProductLink(homeInputDao.getProductName()).click();
        });    
        return new ProductPage();
    }

    public async openURL(): Promise<this> {
        await super.open("/");
        return this;
    }
}