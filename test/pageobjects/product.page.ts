
import { ProductInputDao } from '../daoLayer/inputDao/productInputDao';
import {Page} from './page'
import {ChainablePromiseElement} from 'webdriverio';

export default class ProductPage extends Page {

    private getProductSize(productSize: string): ChainablePromiseElement {
        return $(`(//ul[contains(@class, 'variant-option-list')])[1]//a[text()='${productSize}']`);
    }

    private getProductColor(productColor: string): ChainablePromiseElement {
        return $(`(//ul[contains(@class, 'variant-option-list')])[2]//a[text()='${productColor}']`);
    }

    private getQuantityTextBox(): ChainablePromiseElement {
        return $("input[name='qty']");
    }

    private getAddToCartButton(): ChainablePromiseElement {
        return $("//button/span[text()='ADD TO CART']");
    }

    //currently
    private getAddToCartPopUpButton(): ChainablePromiseElement {
        return $("a.add-cart-popup-button");
    }

    //What I am suggesting
    //private getAddToCartPopUpButton1 = $("a.add-cart-popup-button");


    public async waitForSizeTobeSelected(productSize: string) {
        await browser.waitUntil(async ()=> {
            let classValue = await $(`(//ul[contains(@class, 'variant-option-list')])[1]//a[text()='${productSize}']//parent::li`).getAttribute("class");
            if(classValue === 'selected'){
              return true;
            }else {
              return false;
            }
          })
    }

    public async waitForColorTobeSelected(productColor: string) {
        await browser.waitUntil(async ()=> {
            let classValue = await $(`(//ul[contains(@class, 'variant-option-list')])[2]//a[text()='${productColor}']//parent::li`).getAttribute("class");
            if(classValue === 'selected'){
              return true;
            }else {
              return false;
            }
          })
    }

    public async fillProductDetails(productInputDao: ProductInputDao): Promise<this> {

        await this.getProductSize(productInputDao.getSize()).click();      
        await this.waitForSizeTobeSelected(productInputDao.getSize());  
        await this.getProductColor(productInputDao.getColor()).click();
        await this.waitForColorTobeSelected(productInputDao.getColor());

        await this.getQuantityTextBox().clearValue();
        await this.getQuantityTextBox().setValue(productInputDao.getQuantity());

        await this.getAddToCartButton().click();
        await this.getAddToCartPopUpButton().click();

        return this;
    }    
}