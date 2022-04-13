
//création de la class HomePage
class HomePage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')

    }

    getGender() {
        return cy.get('select')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get('li.nav-item:nth-child(2)')
    }


}

export default HomePage;