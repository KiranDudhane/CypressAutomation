
describe('Action class',()=>{

    it('action scroll into view',()=>{

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Our-mission')
        cy.get('footer').scrollIntoView()

    })

    it('action scroll into view',()=>{

        cy.visit('https://www.oyorooms.com/')
        cy.get(".oyoExpanding__countryLink").first().scrollIntoView()

    })

    it.only('action drag and drop',()=>{

        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get("#draggable").trigger('mousedown',{which : 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p').then((el)=>{
            expect(el).to.have.css('background-color','rgb(244, 89, 80)')
        })


    })


})