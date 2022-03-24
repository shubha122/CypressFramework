import {LoginPage} from "../Unravel/Pages/LoginPage"
const loginPage = new LoginPage()
describe("User Login", () => {
    beforeEach(()=>{
        cy.fixture('example').then(function(data){
            this.data=data
            loginPage.visit("/demo-login")    
        })
    })
    it("Login page title",function() {
        const titleOfThePage = loginPage.getTitle().should('eq', 'FitnetManager')
        // titleOfThePage.should('eq', 'FitnetManager')
    })
    it("Lost Password link",function() {
        const lostPwdLink = loginPage.lostPasswordLinkVisible()
        lostPwdLink.should('be.visible')
    })
    it("Happy flow for login",function() {
        loginPage.setUserEmail(this.data.Email)
        loginPage.setUserPassword(this.data.Password)
        loginPage.clickLoginButton()   
        })
       
             
})