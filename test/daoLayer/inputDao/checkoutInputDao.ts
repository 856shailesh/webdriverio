import { CheckoutDataLayer } from "../../dataLayer/checkoutDataLayer";

export class CheckoutInputDao {

    private fullName: string
    private telephone: string
    private address: string
    private city: string
    private country: string
    private province: string
    private postcode: string   

    constructor(checkoutDataLayer: CheckoutDataLayer) {
        this.fullName = checkoutDataLayer.fullName;
        this.telephone = checkoutDataLayer.telephone;
        this.address = checkoutDataLayer.address;
        this.city = checkoutDataLayer.city;
        this.country = checkoutDataLayer.country;
        this.province = checkoutDataLayer.province;
        this.postcode = checkoutDataLayer.postcode;
    }

    public getFullName(){
        return this.fullName;
    }

    public getTelephone(){
        return this.telephone;
    }

    public getAddress(){
        return this.address;
    }
    public getCity(){
        return this.city;
    }

    public getCountry(){
        return this.country;
    }

    public getProvince(){
        return this.province;
    }

    public getPostcode(){
        return this.postcode;
    }

}