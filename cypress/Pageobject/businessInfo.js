class businessInfo
{
   
    firstquestion()
   {
   // cy.wait(8000)
    cy.xpath("//legend[contains(@id,'Does your business currently have an active Commercial Line of Credit?')]//ancestor::div[contains(@class,'fds-app mt-12')]//span[text()='No']").click();
   // cy.wait(8000)
   }
   
   secondquestion()
   {
    cy.xpath("//legend[contains(@id,'Do you anticipate financing 2 or more vehicles over the next year?')]//ancestor::div[contains(@class,'fds-app mt-12')]//span[text()='Yes']").click();
   // cy.wait(8000)
   }


   thirdquestion()
   {
    cy.xpath("//legend[contains(@id,'Do you anticipate financing $150,000 or more for your fleet in the next year?')]//ancestor::div[contains(@class,'fds-app mt-12')]//span[text()='Yes']").click();
    //cy.wait(8000)
   }


   clickoncontinue()
   {
      cy.wait(2000)
    cy.xpath("//button[@type='button']//span[text()='Continue']").click();
  
  
   }


//     setBusinessLegalName(legalname)
//    {
//      cy.get("#TextField-0-2500-851").type(legalname);
    
//    }


// setFedralTax(fedaraltax)
//    {
     
//      cy.get("#TextField-13700-101271992-466").type(fedaraltax);
//    }


}


export default businessInfo;
