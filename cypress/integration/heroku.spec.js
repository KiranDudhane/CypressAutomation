
describe('validation of basic auth herokuapp',()=>{

    it('basic auth heroku validate requerst',()=>{

        cy.request({
            method : 'GET',
            url : 'https://the-internet.herokuapp.com/basic_auth',
            headers :{
                'authorization' :'Basic YWRtaW46YWRtaW4='
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(1000)
            expect(response.headers).to.contains({
                "content-type": 'text/html;charset=utf-8',
                "content-length":'1643'
            })
            expect(response.body).to.contain('Congratulations! You must have the proper credentials.') 
        })
    })
})