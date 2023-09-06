// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('menuLogin', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#menu-toggle').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
})

Cypress.Commands.add('login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#menu-toggle').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
})

Cypress.Commands.add('input', (locator,value) =>{
    cy.get(locator)
    .should('be.visible')
    .type(value)
})
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