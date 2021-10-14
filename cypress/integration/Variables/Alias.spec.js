
describe('Alias and Invoke',() =>{   

    it('validate the specific product',() => {

        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(1).should('have.text','BeneFit Girl Meets Pearl')
        cy.get('.prdocutname').first().then((el)=>{
            expect(el.text().length).to.eq(24)
        })
    })


    it('validate the specific product with invoke',() => {

        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(1).invoke('text').as('text')

        cy.get('@text').should('include','BeneFit Girl Meets Pearl')
        cy.get('@text').should('have.length','24')
        

    })

    it.only('validate the specific product with invoke',() => {

        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(7).as('element')

        cy.get('@element').should('have.attr','title')
        cy.get('@element').should('have.text','Flash Bronzer Body Gel')
        cy.get('@element').should('have.attr','class','prdocutname')
        

    })
})