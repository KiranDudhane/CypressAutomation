
describe(('variable in cypress'),() =>{

    it('variable',() =>{

    cy.visit('https://automationteststore.com/')
    cy.get('.nav.navbar-nav.main_menu').eq(0).children().click()
    cy.get('#accountFrm_accountregister').click()
    cy.get('#loginFrm_loginname').type("kirandudhane49@gmail.com")
    cy.get('#loginFrm_password').type("kiran")

    
        cy.get('.maintext').then((el) => {
            console.log(el.text())
            expect(el.text()).to.eq(' Account Login')
        })

    })


})
