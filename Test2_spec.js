// <reference types="Cypress />"


describe('My Second Test Suite', function () {
    
    it('My First Test Case', function () {

        //test step
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //Ajouter au panier si le produit contient Cashews
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => 
        {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) 
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })

    



})

