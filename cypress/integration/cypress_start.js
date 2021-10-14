
// --------cypress-------03/08/2021---7.30AM---1st lecture


describe("Validate the login functionality",()=>{
   it("Validate the login",()=>{

    cy.visit("https://app.recast.studio/auth/login/?next=/")
    cy.get("#login-form_email").type("kirandudhane09@gmail.com")
    cy.get('#login-form_password').type("Kiran@123")
    cy.get('.ant-btn').click()
    cy.get('h4[class=ant-typography]').should('have.text','Create New Project')

   })
    it("InValidate the login",()=>{

        cy.visit("https://app.recast.studio/auth/login/?next=/")
        cy.get("#login-form_email").type("kirandudhane09@gmail.com")
        cy.get('#login-form_password').type("Kiran@1234")
        cy.get('.ant-btn').click()
        cy.url().should ('have.include','login')

    })
})
