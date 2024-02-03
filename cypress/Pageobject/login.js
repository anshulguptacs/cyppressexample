class loginPage
{
   visit()
   {
    cy.visit('https://www.gmail.com');
   }

   typeUserName(username)
   {
    cy.get("#identifierId").type("anshul.guptacs")
   }
}

export default loginPage