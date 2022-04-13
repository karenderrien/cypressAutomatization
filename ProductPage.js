
//création de la class Produits
class ProductPage {

   checkOutButton() {
      return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
   }
   checkOutCommand() {
      return cy.get(':nth-child(4) > :nth-child(5) > .btn')

   }



}

export default ProductPage;