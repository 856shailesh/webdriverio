import { ProductDataLayer } from "../../dataLayer/productDataLayer";


export class ProductInputDao {

    private size: string
    private color: string
    private quantity: string

    constructor(productDataLayer: ProductDataLayer) {
        this.size = productDataLayer.size;
        this.color = productDataLayer.color; 
        this.quantity = productDataLayer.quantity; 
    }

    public getSize(){
        return this.size;
    }

    public getColor(){
        return this.color;
    }

    public getQuantity(){
        return this.quantity;
    }

}