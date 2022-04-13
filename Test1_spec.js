/// <reference types="Cypress" />"


describe('My First Test Suite', function () {
    it('My First Test Case', function () {

        //test step
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //selenium get hit url i browser, cypress get acts like finElement of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)

        //Parent child chaining
        cy.get('.products').as('productLocator')

        //Ajouter au panier 
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')   //affiche un message dans la console Web
        }) 
       


        //Ajouter au panier si le produit contient Cashews
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })


        //asset if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        

        
        //This to print in logs
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text())

        })
        //fixture
    })

    



})

