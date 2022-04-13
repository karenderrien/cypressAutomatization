/// <reference types="Cypress" />"


describe('My Second Test Suite', function () {

    it('My First Test Case', function () {

        //Tableaux
        
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //pour gérer les elements cachés (possibilité d'utiliser Force: true)
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url('include','top')

    })





})

