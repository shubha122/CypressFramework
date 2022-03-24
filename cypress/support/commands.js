// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// /Users/shubhajain/unravel/unravel_auto/cypress/support/Base/LoginPage.js
// /Users/shubhajain/unravel/unravel_auto/cypress/support/commands.js
// import { LoginPage } from "../support/Base/LoginPage";
// Cypress.Commands.add('login', (username, password) => {
//     cy.get(LoginPage.userEmail).type(username)
//     cy.get(LoginPage.password).type(password)
//     cy.get(LoginPage.logInButton).click()
//   })