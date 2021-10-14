
describe("upload a file in cypress testcase",()=>{

    it("Upload File",()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const fixturePath = "interview.png"
        cy.get('#fileUpload').attachFile(fixturePath)             // validation with change in DOM
        cy.get('.filename').should('have.text','interview.png')      
    })

    it("Upload File with attachement",()=>{
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        let fixturePath = "interview.png"
        cy.get('#myFile').attachFile(fixturePath)   // validation on click on submit and get pop up text
        cy.get('#submit-button').click()
        cy.on('window:alert',(str)=>{

            expect(str).to.equal('Your file has now been uploaded!')
        })
    })

    it("Upload File without attachement",()=>{
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        // let fixturePath = "interview.png"     // if file is not attached n click on submit button
        // cy.get('#myFile').attachFile(fixturePath)
        cy.get('#submit-button').click()
        cy.on('window:alert',(str)=>{

            expect(str).to.equal('You need to select a file to upload!')
        })
    })
        

    it("Upload File with multiple attachement",()=>{
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let fixturePath = "interview.png"     // if file is not attached n click on submit button
        let fixturePath2 = "PIC.jpg"
        cy.get('#igUpload1_ibb_fp').attachFile(fixturePath)
        cy.get('#igUpload1_ibb_fp').attachFile(fixturePath2)

        cy.get('#igUpload1_summplbl').contains(2)
    })


    it("Upload File with multiple attachement",()=>{
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let fixturePath = "interview.png"     // if file is not attached n click on submit button
        let fixturePath2 = "PIC.jpg"
        cy.get('#igUpload1_ibb_fp').attachFile([fixturePath,fixturePath2])    // passing array of attachement

        cy.get('#igUpload1_summplbl').contains(2)
    })

    it.only("Upload File with rename attachement",()=>{
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let fixturePath = "interview.png"     
        cy.get('#igUpload1_ibb_fp').attachFile({filePath: fixturePath, fileName: "Data.png"})    

    
    })



})


