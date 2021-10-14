
describe('Validate drop down menu', () => {

    it('Validate drop menu for redbus', () => {
        cy.visit('https://www.redbus.com/')
        cy.get('#src').type('pune')
        cy.get('.autoFill > li').each((el) => {

            console.log(el.text())

            if (el.text().includes('Nigdi')) {

                cy.wrap(el).click()
            }
        })

    })

    it('Validate drop menu for ksrtc', () => {
        cy.visit('https://ksrtc.in/oprs-web/')
        cy.get('#fromPlaceName').type('BAL')
        cy.get('.ui-autocomplete').find('li').find('a').each((el) => {

            if (el.text() == 'BALLARI') {

                cy.wrap(el).click()
            }
        })
    })


    it('Validate drop menu for msrtc through selector', () => {
        cy.visit('https://msrtc.maharashtra.gov.in/')
        cy.get('#busservicetype').select('SV')

    })

    it('Validate drop menu for Google auto_drop_down for iphone', () => {
        cy.visit('www.google.com')
        cy.get('.RNNXgb').type('iphone')
        cy.get('.erkvQe').find('li').each((el) => {
            if (el.text().includes('12 pro')) {
                el.click()
            }
        })

    })


    // it.only('valide the functionality of redbus drop down', () => {
    //     cy.visit('www.google.com')
    //     cy.get('input[name="q"]').type('python ')
    //     cy.get('.erkvQe').find('li').each(function (el) {
    //         cy.log(el.text())
    //         if (el.text().includes('tutorial')) {
    //             el.click()
    //         }
    //     })
    // })

    it('Validate drop menu for Google auto_drop_down for laptop', () => {
        cy.visit('www.google.com')
        cy.get('.RNNXgb').type('laptop')
        cy.get('.erkvQe').find('li').each((el) => {
            if (el.text().includes('under 30000')) {
                el.click()
                cy.url().should('include', 'laptop')
            }
        })


    })

    it('Validate drop menu for OYO', () => {
        cy.visit('https://www.oyorooms.com')
        cy.get('#autoComplete__home').type('Satara')
        cy.get('.d-popup.geoSuggestionsList').find('Div').each((el) => {
            if (el.text().includes('Karad')) {
                el.click()
            }
        })
    })

    it.only('Validate drop menu for OYO', () => {
        cy.visit('https://www.oyorooms.com')
        cy.get('.u-textEllipsis.d-text14').eq(6).trigger('mouseover')
        //cy.wait(2000)

    
        cy.get('.mddCityPopUp.d-popup').eq(6).find('a').each(function(el) {

            cy.log(el.text())
            
            if (el.text().includes('Dadar')) {
                cy.log(el.text())
                cy.wrap(el).click({force:true})  
            }
        })
    })











     //cy.get('#root > div > div.homePage__container > div.cmsWrapper.cmsWrapper--topFold > div.oyo-row.oyo-row--no-spacing.headerMDD > div > div:nth-child(7) > div > a:nth-child(4)').click()

    //describe('validate the dropdown functionality', () => {
        it('validate dropdown', () => {
    
            cy.visit('https://www.flipkart.com/')
            cy.get('._1_3w1N').trigger('mouseover')
            cy.get('.pO9syL._1s9xSv').find('li').find('a').find('div').each((el) => {
                //cy.log(el.text())
    
                if (el.text() === 'My Profile') {
                    el.click()
                }
    
                cy.url().should('contain', 'account')
            })
        })

        it('validite eltronic component in flipkart', () => {
            cy.visit('https://www.flipkart.com/')
            cy.get('._1psGvi.SLyWEo').eq(1).trigger('mouseover', { force: true })
            cy.get('._3XS_gI._7qr1OC').children().eq(3).click({ force: true })
            cy.get('._3V8rao').first().should('have.text','Filters')       
           
    
        })
    

















    // .trigger('mouseover', { force: true }).each((el)=>{

    //             if(el.text().includes('Dadar')){
    //             el.click()
    //         }
    //     })

    // cy.get('.oyo-row.oyo-row--no-spacing.headerMDD').find('div').find('div').find('a').trigger('mouseover')
    // cy.get('.is-fontBold.mddCityPopUp__heading').eq(6).find('a').each((el)=>{

    //         if(el.text().includes('Dadar')){
    //         el.click()
    //     }
    // })


























    // it.only('Validate drop menu for Flipkart',()=>{
    //     cy.visit('https://www.flipkart.com/')
    //     cy.wait(6000)
    //     cy.get('._37M3Pb').select()

    //     //cy.get('._6WOcW9._2-k99T').should('have.text','Home Decor')

    // })

})