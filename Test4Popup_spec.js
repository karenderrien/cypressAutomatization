/// <reference types="Cypress" />"


describe('My Second Test Suite', function () {

    it('My First Test Case', function () {

        //test step
       
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //popup pour un messah=ge d'information
        cy.get('#alertbtn').click()

        //popup pour message à confirmer (confirm/cancel)
        cy.get('[value="Confirm"]').click()

        //window: alert (chercher dans google : events cypress)
        //popup simple         
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //popup avec confirmation
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //exemple de changement de page (invoke: on enlève l'attribut avec removeAttr 
        //le target qui ouvre un autre onglet)
        cy.get('#opentab').invoke('removeAttr','target').click()   

        //valider si on est bien sur la bonne page
        cy.url().should('include','rahulshettyacademy')


        //revenir en arrière
        cy.go('back')


    })





})

