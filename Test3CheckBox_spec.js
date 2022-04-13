/// <reference types="Cypress" />"


describe('My Second Test Suite', function () {

    it('My First Test Case', function () {

        //test step
        
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])


        //static dropdown (checkbox example)
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic dropdown 
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item').each(($el, index, $list) => {

            const textVeg = $el.text()
            if (textVeg === 'India') {
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')


        // Hide & show element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio Button
        //radioButton     radio1
        cy.get('[value="radio2"]').check().should('be.checked')

    })





})

