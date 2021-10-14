
describe("GET request Validate", () => {

    it("Validate GET request", () => {

        cy.request({

            method:"GET",
            url: "https://reqres.in/api/users?page=1",
        }).then((response) => {
            expect(response.status).to.eq(200),
            expect(response.duration).to.be.lessThan(500),
            expect(response.headers).to.contain ({

                'content-type':'application/json; charset=utf-8',
                'transfer-encoding': 'chunked' 
            })
            expect(response.body).to.contain({

                "total": 12,
                "total_pages": 2
            })
       })
    })


    it('Validate POST request',()=>{

        cy.request({

            method : 'POST',
            url: 'https://reqres.in/api/users',
            body:{
                    "name": "morpheus",
                    "job": "leader"
            }
        }).then((response)=>{

         expect(response.status).to.eq(201),
         expect(response.duration).to.be.lessThan(1000),
         expect(response.body).to.contain({
            "name": "morpheus",
            "job": "leader"
         })   
         expect(response.body).to.have.property('id')
        })
    })

    it('validate PUT Request',()=>{

        cy.request({
            method : 'PUT',
            url : 'https://reqres.in/api/users/2',
            body: 
                {
                    "name": "morpheus",
                    "job": "zion resident"
                }

        }).then((response)=>{
            expect(response.status).to.eq(200),
            expect(response.duration).to.be.lessThan(500),
            expect(response.body).to.have.contain({
                
                    "name": "morpheus",
                    "job": "zion resident"
                
            })
            expect(response.body).to.have.property('updatedAt')
        })
    })

    it('Check DELETE Request',()=>{

        cy.request({
            method : 'DELETE',
            url : 'https://reqres.in/api/users/2'
            
        }).then((response)=>{
            expect(response.status).to.eq(204)
        })
    })

})

