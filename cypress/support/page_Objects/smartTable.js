

export class smartTablePage{

    updateAgeByName(name, age){
        //find the row and change the age of the user
        cy.get('tbody').contains('tr', name).then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            //finding the value and verifing by colomn
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)

        })
    }

    addNewRowWithFirstAndLastName(firstName, lastName){
         //add the new row just with first name and last name 
         cy.get('thead').find('.nb-plus').click()
         cy.get('thead').find('tr').eq(2).then( tableEmptyRow => {
             cy.wrap(tableEmptyRow).find('[placeholder="First Name"]').type(firstName)
             cy.wrap(tableEmptyRow).find('[placeholder="Last Name"]').type(lastName)
             cy.wrap(tableEmptyRow).find('.nb-checkmark').click()
 
         })
    }

    deleteRowByIndex(index){
        //verify the popup and delete the row
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('[class="nb-trash"]').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        }) 
    }

}
//instance of this class, assign it to his object
export const onSmartTablePage = new smartTablePage()