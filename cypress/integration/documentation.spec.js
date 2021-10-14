
describe('document level validation',()=>{

    it('valdation of url',()=>{
        cy.visit('https://app.recast.studio/auth/login/')
        cy.url().should('contain','login')
    })

    it('Validation of url 2',()=>{

        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.contains('Sign Up').click()
        cy.url().should('contain','register')
    })

    it('validating the title for a page',()=>{
        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.contains('Sign Up').click()
        cy.url().should('contain','register')
        cy.title().should('contain','Registration - Recast Studio')

    })

    it('validating any property of head section',()=>{
        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.document().should('have.property','URL')
        cy.document().should('have.property','head')
        cy.document().should('have.property','body')
        cy.document().should('have.property','baseURI')
    })

})