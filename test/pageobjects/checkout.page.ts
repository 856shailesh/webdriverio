import { CheckoutInputDao } from '../daoLayer/inputDao/checkoutInputDao';
import {Page} from './page'
import {ChainablePromiseElement} from 'webdriverio';
import { step } from "@wdio/allure-reporter";

export default class CheckoutPage extends Page {

    private getFullNameTextBox(): ChainablePromiseElement {
        return  $(`//input[contains(@name, "address[full_name]")]`);
    }

    private getStandardDeliveryRadioButton(): ChainablePromiseElement {
        //return  $(`//span[contains(text(), 'Standard Delivery')]//parent::label/input`);
        return  $(`//span[contains(text(), 'Standard Delivery')]`);
    }

    private getContinueToPaymentButton(): ChainablePromiseElement {
        return  $(`//span[text()='Continue to payment']//parent::button`);
    }

    private getPaymentMethodCashOnDeliveryRadioButton(): ChainablePromiseElement {
        return  $(`(//form[@id='checkoutPaymentForm']//a)[1]`);
    }

    private getPlaceOrderButton(): ChainablePromiseElement {
        return  $(`//span[text()='Place Order']//parent::button`);
    }

    private getTelephoneTextBox(): ChainablePromiseElement {
        return  $(`//input[contains(@name, "address[telephone]")]`);
    }

    private getAddressTextBox(): ChainablePromiseElement {
        return  $(`//input[contains(@name, "address[address_1]")]`);
    }

    private getCityTextBox(): ChainablePromiseElement {
        return  $(`//input[contains(@name, "address[city]")]`);
    }

    private getPostCodeTextBox(): ChainablePromiseElement {
        return  $(`//input[contains(@name, "address[postcode]")]`);
    }

    private getCountryDropdown(): ChainablePromiseElement {
        return  $(`select[id='address[country]']`);
    }

    private getProvinceDropdown(): ChainablePromiseElement {
        return  $(`select[id='address[province]']`);
    }

    public async fillAddressDetails(checkoutInputDao: CheckoutInputDao): Promise<this> {
        await step(`User fills the address detail`, async (step) => {
        await this.getFullNameTextBox().setValue(checkoutInputDao.getFullName());
        await this.getTelephoneTextBox().setValue(checkoutInputDao.getTelephone());
        await this.getAddressTextBox().setValue(checkoutInputDao.getAddress());
        await this.getCityTextBox().setValue(checkoutInputDao.getCity());
        await this.getCountryDropdown().selectByVisibleText(checkoutInputDao.getCountry());
        await this.getProvinceDropdown().selectByVisibleText(checkoutInputDao.getProvince());
        await this.getPostCodeTextBox().setValue(checkoutInputDao.getPostcode())     
        })   
        return this;
    }

    public async selectDeliveryoption(): Promise<this> {
        await step(`User selects the Delivery option`, async (step) => {
            await this.waitForDeliverySectionToExist();
            await browser.pause(3000);
            await this.getStandardDeliveryRadioButton().scrollIntoView();
            await this.getStandardDeliveryRadioButton().moveTo();
            await this.getStandardDeliveryRadioButton().click();
        });
        return this;
    }

    public async clickContinueToPayment(): Promise<this> {
        await step(`User clicks on continue to Payment`, async (step) => {
            await this.getContinueToPaymentButton().click();
        })
        return this;
    }

    public async selectPaymentMethod() : Promise<this> {
        await step(`User selects Payment Method`, async (step) => {
            await this.getPaymentMethodCashOnDeliveryRadioButton().click();
        })
        return this;
    }

    public async clickPlaceOrder() : Promise<this> {
        await step(`User clicks on Place Order`, async (step) => {
            await this.getPlaceOrderButton().click();
        })
        return this;
    }

    public async openURL(): Promise<this> {
        await super.open("/checkout");
        return this;
   }


   public async waitForDeliverySectionToExist() {
        try {
        await $(`(//div[@class='shipping-methods']//input)[1]`).waitForExist(); 
        await $(`(//div[@class='shipping-methods']//input)[1]`).waitForClickable();    
        } catch(error){
            console.log("waitForDeliverySectionToExist error is: ",error);
        }
    }

}