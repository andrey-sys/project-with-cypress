const { onDatepickerPage } = require("../support/page_Objects/datepickerPage")
const { formLayoutsPage, onFormLayoutsPage } = require("../support/page_Objects/formLayoutsPage")
const { navigateTo } = require("../support/page_Objects/navigationPage")
const { onSmartTablePage } = require("../support/page_Objects/smartTable")

describe('tests with page objects', ()=>{

    beforeEach('navigate to the site', ()=>{

        cy.navigateToHomePage()

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
    it('submit form and choose the tomorrow date',()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithCheckbox('rvatelJop','jestkiytrah@yahoo.com')
        onFormLayoutsPage.submitBasicFormWithCheckbox('jestkiytrah@yahoo.com','rvatelJop')
        navigateTo.datepickerPage()
        onDatepickerPage.setCommonDatepickerFromCurrent(1)
        onDatepickerPage.selectRangeInDatepickerFromToday(5,10)
      
    })

    //navigate to Smart table, create new row, modify the row, delete the row
    it.only('Smart table create, modify and delete the row', ()=>{
        navigateTo.smartTablePage()
        onSmartTablePage.updateAgeByName('John', '37')
        onSmartTablePage.addNewRowWithFirstAndLastName('Andrew', 'Scottt')
        onSmartTablePage.deleteRowByIndex(1)

    })



})