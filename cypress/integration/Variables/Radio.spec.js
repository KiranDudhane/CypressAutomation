

describe('check the function',()=>{

    // it('Verify the functionality of roundtrip button',()=>{

    //     cy.visit('https://myaccount.intechonline.net/Customer/Default.aspx')
    //     cy.get('#txtUserName').type('DUDHANE08')
    //     cy.get('#txtPassword').type('DUDHANE08')
    //     cy.get('#save').click()
    //     cy.get('#AccountRecharge').click()
    //     cy.get('#ContentPlaceHolder1_RadioButtonList1_0').as('PayOnline')
    //     cy.get('@PayOnline').click()
    //     cy.get('@PayOnline').should('be.checked')

    // })

    // it ('Verify the functionality of roundtrip button',()=>{

    //     cy.visit('https://www.makemytrip.com/flights/?cmp=SEM|D|DF|G|Brand|B_M_Makemytrip_Search_Exact|Brand_Top_5_Exact|Expanded|162031058804&s_kwcid=AL!1631!3!162031058804!e!!g!!make%20my%20trip&ef_id=CjwKCAjw95yJBhAgEiwAmRrutOvGactrfrw08SiqRfB5gKcoqamSVWgM_1DkrsDKHsjZf2Q4M8WfeRoC6m8QAvD_BwE:G:s&gclid=CjwKCAjw95yJBhAgEiwAmRrutOvGactrfrw08SiqRfB5gKcoqamSVWgM_1DkrsDKHsjZf2Q4M8WfeRoC6m8QAvD_BwE')
    //     cy.get('span[value ="Round Trip"]').click()
    //     cy.get('span[value ="Round Trip"]').should('be.checked')
    // })




    it('Validate the single check box',()=>{
+
        cy.visit('https://www.bigbasket.com/cl/bakery-cakes-dairy/?nc=nb')
        cy.get('span [class="ng-binding"]').click()
        .should('contain','Amul').should('be.checked')
        //cy.get('#filterbar > div:nth-child(4) > div.col-xs-12.ng-scope > section > div:nth-child(2) > label > span.cr > i]').should('be.checked')
    })






})