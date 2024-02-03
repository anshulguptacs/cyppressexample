import businessInfo from "../Pageobject/businessInfo";
describe('Business Information page', () => {
  
  it ('Enter businesslegal name', () => {
      cy.visit("https://www.cloc-application.ford.com/", {headers:{"Accept-Encoding": "gzip,deflate"}})
      //cy.fixture('initialScreener.json').then((nitin)=>
      //{
        const ln=new businessInfo();
        ln.firstquestion();
        ln.secondquestion();
        ln.thirdquestion();
        ln.setBusinessLegalName("Anshul");
        ln.setFedralTax(123456789);
      })

    }) 
    //})

  