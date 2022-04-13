/// <reference types="Cypress" />"

import HomePage from '../../support/PageObject/HomePage'
import ProductPage from '../../support/PageObject/ProductPage'
describe('My Second Test Suite', function () {

    before(() => {
        // root-level hook
        // runs once before all tests - A runner avant tous les tests - pré-requis
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })

    it('My First Test Case', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url')+"/angularpractice/")

        //J'écris mon nom sur le formulaire et sélectionne femal
        //:nth-child(1) > .form-control (trouvé par cypress)
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)


        //vérifier si le nom entré est identique à Two-way Data Binding example
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //vérifier la longueur min du nom
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        //vérifier si un check est invisible
        homePage.getEntrepreneur().should('be.disabled')

        //faire une pause
        //cy.pause()

        //debugger
        //cy.debug

        //accéder au shop
        homePage.getShopTab().click()

        //ajouter un produit Blackberry avec la commande selectProduct du fichier commands.js (support)

        ///array1.forEach(element => console.log(element));
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });

        //Aller voir le panier
        productPage.checkOutButton().click()

        //vérifier si le résultat du panier est bon
        /// calculer la somme
        var sum=0

        cy.get("tr td:nth-child(4) strong").each(($el, Index, $list) => {
            const amount=$el.text()
            var res=amount.split(" ")
            res=res[1].trim()
            sum=Number(sum)+Number(res)
            
        }).then(function(){
            cy.log(sum)
        })
        /// comparer avec le total
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res=amount.split(" ")
            var total=res[1].trim()
            expect(Number(total)).to.equal(sum)
        })



        //valider le panier
        productPage.checkOutCommand().click()

        //your delivery location
        cy.get('#country').type('india')
        //configuration pour ce test uniquement
        Cypress.config("defaultCommandTimeout", 10000)
        cy.get('.suggestions > ul > li > a').click()


        //check term and condition
        cy.get('#checkbox2').click({ force: true })
        cy.get('.ng-untouched > .btn').click()
        Cypress.config("defaultCommandTimeout", 30000)
        //cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")

        cy.get('.alert').then(function (element) {

            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true

        })

    })





})

