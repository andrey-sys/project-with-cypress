
//function for the verification if the Forms group opened(clicked) or not
function selectGroupMenuItem(groupName){
    cy.contains('a',groupName).then(menu =>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr =>{
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

//class for navigation to each page in menu
export class navigationPage{

    formLayoutsPage(){
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }
    datepickerPage(){
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click({force:true})
    }
    dialogPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Dialog').click()
    }
    windowPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Window').click()
    }
    popoverPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Popover').click()
    }
    toastrPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }
    tooltipPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }
    calendarPage(){
        selectGroupMenuItem('Extra Components')
        cy.contains('Calendar').click()
    }
    smartTablePage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }
    treeGridPage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains('Tree Grid').click()
    }
}

//instance of this class, assign it to his object
export const navigateTo = new navigationPage()
