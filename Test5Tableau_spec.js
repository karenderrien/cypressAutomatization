/// <reference types="Cypress" />"


describe('My Second Test Suite', function () {

    it('My First Test Case', function () {

        //Tableaux
        
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, Index, $list)=>
        {
            const text=$el.text()
            if(text.includes('Python'))
            {
                cy.get("tr td:nth-child(2)").eq(Index).next().then(function(price)
                {
                   const priceText=price.text()
                   expect(priceText).to.equal('25')
                })
            }


        })


    })





})

