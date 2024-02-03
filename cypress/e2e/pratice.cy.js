describe("Text Field Validation", () => {
  before(()=>{
cy.log("***Launching the application***")
cy.visit('/')
})
   
// This code will run after all tests have completed
after(()=>{
  cy.log("***Launching the application***")
  cy.clearLocalStorage();
  cy.clearCookies();
  })
  
  
  it("should accept alphanumeric and special characters", () => {
      // tag: smoke
      // tag: regression
      cy.fixture('pratice.json').then((data)=>
      {
        cy.validateTextField("#identifierId",data.name)
      const textFieldSelector = "#identifierId"; // Replace with the actual selector of your text field
      //const inputText = data.name;
    
      cy.validateTextField(textFieldSelector, data.name);
    })

}) 
})
