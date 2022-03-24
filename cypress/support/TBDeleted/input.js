/// <reference types="cypress" />

// import { InputPage } from "../../support/Base/InputPage";
describe("User pass the inputs", () => {
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
       
    })
    it("Pass input",function() {
        cy.visit('/'+"/demo-login")
        cy.login(this.data.Email, this.data.Password) 
        cy.url().should('include', '/input')  
        cy.contains('Fill out the questionnaire').click()
        cy.get('.css-5p3ihh').click({force:true})
        cy.get('#react-select-2-listbox').each(($ele) => {
            if ($ele.text() == 'Food and Beverage') {
                cy.wrap($ele).click({force:true})
            }
        })
        cy.contains('Next').click()
        cy.get('.css-hfbj6y').click({force:true})
        cy.get('#react-select-3-listbox').find('label').each(($ele) => {
            // cy.log($ele)
            if ($ele.text() == 'Processed foods') {
                cy.wrap($ele).click()
            }
        })
        cy.contains('Next').click({force:true})


    })
})