

describe('transversing the dom in cypress', () => {

    // beforeEach(() => {
    //     cy.visit('https://www.urbanladder.com/')
    // })
    // afterEach(() => {
    //     cy.log('Test is succsesfully Done')
    // })


    // it('children() to get children.length of ele in DOM', () => {

    //     cy.get('.categories.row').children('a').should('contain', "Sofas")
    // })

    // it('children() to get children of ele in DOM', () => {

    //     cy.get('.categories.row').eq(0).children().should('have.length', '8')

    // })

    // it('closest() to get closest parent in dom', () => {

    //     cy.get('.categories.row').eq(0).children().should('have.length', '8')
    //     cy.get('.category').closest('div').should('contain', 'Dining')

    // })

    // it('eq() to retrive the specific ele based on index', () => {

    //     cy.get('.categories.row').children().eq(6).should('contain', 'Coffee Tables')
    // })

    // it('first() to retrive the frist ele in the list', () => {

    //     cy.get('.categories.row').eq(0).children().first().should('contain', 'Sofas')
    // })

    // it('last() to retrive the frist ele in the list', () => {

    //     cy.get('.categories.row').eq(0).children('a').last().should('contain', 'Cupboards')
    // })

    // it('filter() to filter out match condition ele from the list', () => {
    //     cy.get('.categories.row').children().filter('a').should('contain', 'Bookshelves')
    // })

    // it('find() to retrive the element that have specific selector or specfic', () => {

    //     cy.get('.categories.row').find('a').should('contain', 'Dining')
    // })

    // it('nextAll() to get all next siblings with specific parents',()=>{
    //     cy.get('.categories.row').eq(0).contains('Beds').nextAll().should('have.length','6')

    // })

    // it("nextUntil() to get the all sibling elements for the defined elements",()=>{
    //     cy.get('.categories.row').eq(0).contains('Dining').nextUntil('div').should('have.length','5')
    // })

    // it("not() to remove the element from the set",()=>{
    //     cy.get('.categories.row').eq(0).children().not('#content > div.personalized-component > div > div:nth-child(2) > a:nth-child(5) > h4').should('have.length','7')

    // })

    // it("parent() to get the parent element of the DOM",()=>{

    //     cy.get('.categories.row').eq(0).contains('TV Units').parent('div').should('have.class','categories row')
    // })

    // it("parents() to get multiple parent elements in DOM",()=>{
    //     cy.get('.categories.row').eq(0).contains('Seating').parents().should("have.class", "hp-module");
    // })

    // it("prevAll() to get all previous siblings with specific parent",()=>{
    //     cy.get('.categories.row').eq(1).contains('Study').prevAll().should('have.length','2')
    // })

    // it("prevUntil() to get all the sibling elements for the defined element", () =>{
    //     cy.get('.categories.row').eq(1).contains('Shoe Racks').prevAll().should('have.length','4')
    // })

    // it.only("siblings() to get sibling DOM element", () =>{
    //     cy.contains('Sofas').siblings().should('have.length','8')
    // })

    // it.only('siblings() Way 3', () => {
    //     cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    //     cy.contains('Sugar').siblings().each((el)=>{      
    //         let slicedStr = el.text().slice(0,5)
    //         expect(el.text(), 'Coffee').to.includes(slicedStr)
    //     })  
    // })
    it.only('siblings() Way 2', () => {
        cy.visit('https://www.urbanladder.com/')
        // cy.wait(6000)
        cy.get('.categories.row').eq(0).contains('Sofas').siblings().then((el)=>{
            expect(el.text(), 'TV Units').to.includes('TV Units')
            // expect(el.text(), 'Milk').to.includes('Milk')
        })    
    })


    it.only('siblings() Way 3', () => {
        cy.visit('https://www.urbanladder.com/')
        cy.get('.categories.row').eq(0).contains('Sofas').siblings().each((el)=>{      
            let slicedStr = el.text().slice(0,5)
            expect(el.text(), 'Seating').to.includes(slicedStr)
        })  
    })

    it.only('siblings() Way 2', () => {
        cy.visit('https://www.urbanladder.com/')
        // cy.wait(6000)
        cy.get('.categories.row').eq(0).contains('Sofas').siblings().should('have.length','7')
      
    })



    // it.only(".not to remove the element from the set", () => {
    //     cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    //     cy.get(".traversal-food-list")
    //       .children()
    //       .not(".list-header")
    //       .should("have.length", "9")
    // })





})