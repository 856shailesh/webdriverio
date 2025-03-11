import { LoginDataLayer } from "../../dataLayer/LoginDataLayer"

export class LoginInputDao {

    private userName: string
    private password: string

    constructor(loginDataLayer: LoginDataLayer) {
        this.userName = loginDataLayer.userName;
        this.password = loginDataLayer.password; 
    }

    public getUserName(){
        return this.userName;
    }

    public getPassword(){
        return this.password;
    }

}