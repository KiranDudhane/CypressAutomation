const { each } = require("jquery")

describe('automate calender', () => {

    it('Validate the Datepicker', () => {

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')

        let Day2 = new Date()
        Day2.setDate(Day2.getDate() + 200)
        let year = Day2.getFullYear()
        let month = Day2.toLocaleString('default', { month: 'long' })
        let Fdate = Day2.getDate()

        // cy.log(year)
        // cy.log(month)
        // cy.log(Fdate)

        function selectDMY() {
            cy.get('.form-control').click()
            cy.get('.datepicker-switch').eq(0).then((el) => {

                if (!el.text().includes(year)) {
                    cy.get('.next').eq(0).click()
                    selectDMY()
                }
            }).then(() => {

                cy.get('.datepicker-switch').eq(0).then((el) => {

                    if (!el.text().includes(month)) {
                        cy.get('.next').eq(0).click()
                        selectDMY()
                    }
                })

            })


        }
        function selectDate() {

            cy.get('.day').contains(Fdate).click()
            return true
        }

        selectDMY()
        selectDate()
    })

    // it('Validate the Datepicker for MSRTC', () => {

    //     cy.visit('https://msrtc.maharashtra.gov.in/index.php')

    //     let Day3 = new Date()
    //     Day3.setDate(Day3.getDate() + 200)
    //     let year = Day3.getFullYear()
    //     let month = Day3.toLocaleString('default', { month: 'long' })
    //     let Fdate = Day3.getDate()

    //     cy.log(year)
    //     cy.log(month)
    //     cy.log(Fdate)

    //     function ChooseDate(){
    //         cy.get('.journey.hasDatepick').click()

    //         cy.get('.datepick-new-year > option').then((el)=>{

    //                 cy.get('option[value = "2022"]').click({force:true})
    //                 ChooseDate()

    //             cy.log(el.text())


    //             // if(!el.text().includes(year) ){



    //             //     //cy.log(el.text())
    //             //     //cy.wrap(el).click()

    //             //     //el.text().click()
    //             //     //cy.get('.datepick-next').click()

    //             // }

    //         })  
    //         //cy.get('select.datepick-new-month > option').click(month)   


    //         // select.datepick-new-year > option
    //         // select.datepick-new-month > option

    //     }
    //     ChooseDate()


    // })

    it.only('Validate the Datepicker for RedBus', () => {

        cy.visit('https://www.redbus.com/')

        let Day4 = new Date()
        Day4.setDate(Day4.getDate() + 200)
        let year = Day4.getFullYear()
        let month = Day4.toLocaleString('default', { month: 'long' })
        let Fdate = Day4.getDate()

        cy.log(year)
        cy.log(month)
        cy.log(Fdate)


        cy.get('#onward_cal').click({force:true})

        function SeDMY() {
            //cy.get('.db.text-trans-uc').first().click()
            cy.get('.monthTitle').last().then((el) => {

                if (!el.text().includes(year)) {
                    //cy.log(el.text())
                    cy.get('.next').last().click()
                    SeDMY()
                }

            }).then((el) => {

                cy.log(el)

                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    SeDMY()
                }

            })
        }

        function fDate(){
            cy.get('.rb-monthTable.first.last').last().find("tr").find('td').each((el)=>{

                cy.log(el.text())
                el.click()
            })
        }
        SeDMY()
        fDate()
    })













    it('validate the future date', () => {
        cy.visit('https://www.redbus.com/')
        let d2 = new Date();
        d2.setDate(d2.getDate() + 365)

        let year = d2.getFullYear()
        let month = d2.toLocaleString('default', { month: 'short' })
        let furturedate = d2.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(furturedate)

        cy.get('#onward_cal').click({ force: true })

        function YearandMonth() {
            cy.get('.monthTitle').last().then((el) => {
                if (!el.text().includes(year)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    YearandMonth()
                }
            }).then((el) => {
                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    YearandMonth()
                }
            })
        }
        function fDate() {
            cy.get('.rb-monthTable.first.last').last().children().first().find('tr').find('td').each((el) => {
                // cy.log(el.text())
                if (el.text().includes(furturedate)) {
                    cy.log(el.text())
                    el.click()
                }
            })
        }





        YearandMonth()
        fDate()

    })

})