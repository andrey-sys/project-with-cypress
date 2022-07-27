
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

    // click the dropdown
    clickDropdown(element){
        cy.get(element).click()
    }

    //choose color of the background
    chooseColorBackground(element, backGroundColor){
        cy.contains(element, backGroundColor).click()
    }

    // validate the color of the background by it's color
    validateColorBackgroundByColor(element, colorBackground){
        cy.get(element).should('contain',colorBackground)
    }

    // validate the color of the background by CSS color
    validateColorBackgroundByCSSColor(CSSElement, colorBackground){
        cy.get(CSSElement).should('have.css', 'background-color', colorBackground)
    }

    // validate all background colors by using each() method and the rgb colors from CSS style
    validateAllBackgroundColor(buttonOpenDropdownList,elementsOfTheDropdown,elementBackgrounFromCssStyle){
        cy.get(buttonOpenDropdownList).then(dropdown=>{
            cy.wrap(dropdown).click()
            cy.get(elementsOfTheDropdown).each((list,index) =>{
                const itemText = list.text().trim()//take the text of each elem from the list

                //the list in json format of each background color
                const colors = {
                    "Light":"rgb(255, 255, 255)",
                    "Dark":"rgb(34, 43, 69)",
                    "Cosmic":"rgb(50, 50, 89)",
                    "Corporate":"rgb(255, 255, 255)"
                }

                cy.wrap(list).click()
                cy.wrap(dropdown).should('contain',itemText)
                cy.get(elementBackgrounFromCssStyle).should('have.css', 'background-color', colors[itemText])
                if (index <3){
                    cy.wrap(dropdown).click()
                    
                }

            })
        })
    }


}

export const onNbLayoutHeader = new nbLayoutHeader()