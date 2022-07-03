const { onDatepickerPage } = require("../support/page_Objects/datepickerPage")
const { formLayoutsPage, onFormLayoutsPage } = require("../support/page_Objects/formLayoutsPage")
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
    //navigate to Form Layouts, submit Inline and Basic form, go to Calendar and select tomorrow date
    it.only('submit form and choose the tomorrow date',()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithCheckbox('rvatelJop','jestkiytrah@yahoo.com')
        onFormLayoutsPage.submitBasicFormWithCheckbox('jestkiytrah@yahoo.com','rvatelJop')
        navigateTo.datepickerPage()
        onDatepickerPage.setCommonDatepickerFromCurrent(1)
    })



})