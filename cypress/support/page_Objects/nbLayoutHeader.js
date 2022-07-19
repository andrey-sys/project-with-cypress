
// refactor the code for more usability
function ifmenuExpandedOrCompacted(elementName){
    cy.contains('a',groupName).then(menu =>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr =>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class nbLayoutHeader {

    
    validateMenuExpanded(className,element){
        cy.get(className).should('match', element)
    }
    clickMenu2Button(element){
        cy.get(element).click()
    }
    validateMenuCompacted(className,element){
        cy.get(className).should('match', element)
    }
    validateMenuNotClicked(className,element){
        cy.get(className).should('match', element)
    }
    
    //method for the validation of the header by snapshots 
    validateHeader(element){
        cy.get(element).then(someElementFromHeader =>{
            cy.wrap(someElementFromHeader).toMatchImageSnapshot({
                imageConfig: {
                  threshold: 0.001,
                }
                })
            })  
   
    }
    //validate entire page
    validateEntirePage(){
        cy.document().toMatchImageSnapshot({
            imageConfig: {
              threshold: 0.001,
            }
            })

    }

}

export const onNbLayoutHeader = new nbLayoutHeader()