/// <reference types="Cypress" />
import {ElementUtility} from "/cypress/support/Utility/ElementUtility"
import { NAME } from '/cypress/support/Constant.js';

const elementUtility = new ElementUtility()

export class LoginPage{
    visit(path){
        cy.visit('/')
    }
    setUserEmail(email){
        elementUtility.typeText(elementUtility.findElement('#formLogin\\:username'),email)
        // const emailField= cy.get('#formLogin\\:username')
        // elementUtility.typeText(emailField,email)
    }
    setUserPassword(password){
        const passwordField= cy.get('#formLogin\\:password')
        elementUtility.typeText(passwordField,password)
    }
    clickLoginButton(){
           // const loginButton= cy.get('#formLogin\\:login_button')
        const loginBtn = '#formLogin\\:login_button'
        const loginButton = elementUtility.findElement(loginBtn)
        elementUtility.clickBtn(loginButton)
    }
    lostPasswordLinkVisible(){
        const lostPwdLink = cy.get(NAME.lostPwdLink)
        return lostPwdLink
    }
    getTitle(){
        const titleOfThePage = cy.title()
        return titleOfThePage
    }
}