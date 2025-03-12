
import { CheckoutInputDao } from '../daoLayer/inputDao/checkoutInputDao';
import {Page} from './page'
import {ChainablePromiseElement} from 'webdriverio';

export default class CheckoutPage extends Page {

    private getFullNameTextBox(): ChainablePromiseElement {
        return  $(`//input[contains(@name, "address[full_name]")]`);
    }

    private getStandardDeliveryRadioButton(): ChainablePromiseElement {
        return  $(`//span[contains(text(), 'Standard Delivery')]//parent::label/input`);
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
        await this.getFullNameTextBox().setValue(checkoutInputDao.getFullName());
        await this.getTelephoneTextBox().setValue(checkoutInputDao.getTelephone());
        await this.getAddressTextBox().setValue(checkoutInputDao.getAddress());
        await this.getCityTextBox().setValue(checkoutInputDao.getCity());
        await this.getCountryDropdown().selectByVisibleText(checkoutInputDao.getCountry());
        await this.getProvinceDropdown().selectByVisibleText(checkoutInputDao.getProvince());
        await this.getPostCodeTextBox().setValue(checkoutInputDao.getPostcode())        
        return this;
    }

    public async selectDeliveryoption(): Promise<this> {
        await this.getStandardDeliveryRadioButton().click();
        return this;
    }

    public async clickContinueToPayment(): Promise<this> {
        await this.getContinueToPaymentButton().click();
        return this;
    }

    public async selectPaymentMethod() : Promise<this> {
        await this.getPaymentMethodCashOnDeliveryRadioButton().click();
        return this;
    }

    public async clickPlaceOrder() : Promise<this> {
        await this.getPlaceOrderButton().click();
        return this;
    }

    public async openURL(): Promise<this> {
        await super.open("/checkout");
        return this;
   }

}