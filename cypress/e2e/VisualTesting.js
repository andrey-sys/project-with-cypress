

describe('Visual Test suite', ()=>{

    it('should test snapshot', ()=> {
       
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        cy.contains('nb-card','Using the Grid').then(firstForm =>{
            cy.wrap(firstForm).toMatchImageSnapshot({
                imageConfig: {
                  threshold: 0.001,
                }
                })
            cy.document().toMatchImageSnapshot({
                    imageConfig: {
                      threshold: 0.001,
                    }
               })


        })
       
       
    })
        
})