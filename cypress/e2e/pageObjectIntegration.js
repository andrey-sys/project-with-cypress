const { navigateTo } = require("../support/page_Objects/navigationPage")

describe('tests with page objects', ()=>{

    beforeEach('navigate to the site', ()=>{
        cy.visit('/')

    })

    //test with calling the functions from navigationPage class 
    it('navigation test', ()=>{

        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.dialogPage()
        navigateTo.windowPage()
        navigateTo.popoverPage()
        navigateTo.toastrPage()
        navigateTo.tooltipPage()
        navigateTo.calendarPage()
        navigateTo.smartTablePage()
        navigateTo.treeGridPage()

    })

})