
export class AccountOutputDao {
    private userName: string    

    constructor(userName: string) {
        this.userName = userName;        
    }

    public getUserName(){
        return this.userName;
    }

}
