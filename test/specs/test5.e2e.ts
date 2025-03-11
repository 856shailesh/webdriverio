
describe("Scneario1", () => { 
    let name = "shailesh"; //Scenario scope
    it("tc1", () => {
        let lastname = "kumar" // TC scope
        console.log("TC 1 exectuion", name , lastname);
    })
    it("tc2", () => { 
        console.log("TC2 execution");
    })
    it("tc3", () => {       
        console.log("TC3 execution");
    })
})