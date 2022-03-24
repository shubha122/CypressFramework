/// <reference types="cypress" />

import { RegisterPage } from "../../support/Base/RegisterPage";
describe("User Registeration", () => {
    beforeEach(()=>{
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    
    it("Happy Flow for registeration",function() {
        cy.visit('/'+"/demo-signup")
        cy.get(RegisterPage.firstName).type(this.data.FirstName)  
        cy.get(RegisterPage.lastName).type(this.data.LastName) 
        cy.get(RegisterPage.companyName).type(this.data.CompanyName)
        cy.get(RegisterPage.email).type(this.data.Email)
        cy.get(RegisterPage.companyLocationText).click()
        cy.get(RegisterPage.companyLocationList).each(($ele) => {
            if ($ele.text() == this.data.CompanyLocation) {
                cy.wrap($ele).click()
            }
        })
        cy.get(RegisterPage.password).type(this.data.Password)
        cy.get(RegisterPage.termsAndConditionCheckbox).click({force:true})
        cy.get(RegisterPage.signUpButton).click()
           
    })
})