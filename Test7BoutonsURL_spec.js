/// <reference types="Cypress" />"


describe('My Second Test Suite', function () {

    it('My First Test Case', function () {

        //vérifier si un bouton va vers la bonne adresse url
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)

        })




    })





})

