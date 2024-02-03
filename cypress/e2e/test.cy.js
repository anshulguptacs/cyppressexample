import loginPage from "../Pageobject/login";

describe('Google Page Test', () => {
    it('should open Google page', () => {
      // Visit the Google page
      //cy.visit('https://www.gmail.com');
      //cy.get("#identifierId").type("anshul.guptacs")
  
      // Perform additional assertions or actions if needed
      // For example, you can check if the search input is visible
      //cy.get('input[name="q"]').should('be.visible');
      const ln=new loginPage()
      ln.visit();
      ln.typeUserName("anshul.guptacs")

    });
  });