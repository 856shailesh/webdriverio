import CheckoutPage from './checkout.page';
import {Page} from './page'
import {ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

export default class CartPage extends Page {
     rowsDataGlobal : string[][];

      constructor(){
        super();
        this.rowsDataGlobal = [];           
     }


    private getCartRows(): ChainablePromiseArray {
        return  browser.$$("//table[contains(@class,'items-table')]//tbody/tr");
    }
    private getProductDetail(): string {
        return "//td[1]//div[@class='cart-tem-info']/a";
    }
    private getProductPrice(): string {
        return  "//td[2]//span[@class='sale-price']";
    }
    private getProductQuantity(): string {
        return  "//td[3]//input[@type='text']"
    }
    private getProductTotalPrice(): string {
        return  "//td[4]//span";
    }
    private getCheckoutButton(): ChainablePromiseElement {
        return  $(`//a[contains(@href,'checkout')]`);
    }
    public async clickCheckoutButton(): Promise<CheckoutPage> {
        await this.getCheckoutButton().click();      
        return new CheckoutPage();
    }

    public async readCartData(): Promise<string[][]> {
        const rows = this.getCartRows()
        const rowCount = await rows.length;

        const rowsData : string[][] = [];
        console.log(`Rows count is: ${rowCount}`);

        //read all rows data at once:
        for(let i =0; i< rowCount; i++){      
        const rowData : string[] = [];
        const productDetail = await rows[i].$(this.getProductDetail()).getText();
        const productPrice = await rows[i].$(this.getProductPrice()).getText();
        const productQty = await rows[i].$(this.getProductQuantity()).getAttribute("value");
        const productTotalPrice = await rows[i].$(this.getProductTotalPrice()).getText();

        rowData.push(productDetail);
        rowData.push(productPrice);
        rowData.push(productQty);
        rowData.push(productTotalPrice); 
        rowsData.push(rowData);
        }   

        this.rowsDataGlobal = rowsData;

        return rowsData;                
    }


    public async printCartData(): Promise<this> {
                
        for(const rowData of this.rowsDataGlobal){
            rowData.forEach((val,index)=> {
            console.log(`Cell ${index+1} text is: ${val}`);
            })
            console.log("------");
        }
        return this;
        
    }

    public async openURL(): Promise<this> {
        await super.open("/cart");
        return this;
   }

}