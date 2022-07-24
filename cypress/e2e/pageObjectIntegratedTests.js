const { onDatepickerPage } = require("../support/page_Objects/datepickerPage")
const { formLayoutsPage, onFormLayoutsPage } = require("../support/page_Objects/formLayoutsPage")
const { navigateTo } = require("../support/page_Objects/navigationPage")
const { onNbLayoutHeader } = require("../support/page_Objects/nbLayoutHeader")
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
    it('submit form and choose the tomorrow date',{ browser: '!chrome' },()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithCheckbox('rvatelJop','jestkiytrah@yahoo.com')
        onFormLayoutsPage.submitBasicFormWithCheckbox('jestkiytrah@yahoo.com','rvatelJop')
        navigateTo.datepickerPage()
        onDatepickerPage.setCommonDatepickerFromCurrent(1)
        onDatepickerPage.selectRangeInDatepickerFromToday(5,10)
      
    })

    //navigate to Smart table, create new row, modify the row, delete the row
    it('Smart table create, modify and delete the row',{ browser: '!edge' }, ()=>{
        navigateTo.smartTablePage()
        onSmartTablePage.updateAgeByName('John', '37')
        onSmartTablePage.addNewRowWithFirstAndLastName('Andrew', 'Scottt')
        onSmartTablePage.deleteRowByIndex(1)

    })

    // click the menu 2 button and validate the menu 1 is expanded or compacted
    it('validate if the menu expanded or compacted',  ()=>{
        onNbLayoutHeader.validateMenuNotClicked('.menu-sidebar','.left')
        onNbLayoutHeader.clickMenu2Button('[data-name="menu-2"]')
        onNbLayoutHeader.validateMenuCompacted('.menu-sidebar','.compacted')
        onNbLayoutHeader.clickMenu2Button('[data-name="menu-2"]')
        onNbLayoutHeader.validateMenuExpanded('.menu-sidebar','.expanded')
    })

    // verify the header by making the snapshots for two parts 
    it('verify header on the main page', ()=>{
        //verify the header left side
        onNbLayoutHeader.validateHeader('nb-layout-header')
        //entire page validation
        onNbLayoutHeader.validateEntirePage()
        
    })

    // verify the button by its text, by the specific element of current form Using the Grid, by finding the 
    // correct element with using the perents element of this form
    it('verify the Sign in button by its text', ()=> {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.verifySignInUsingTheGridButton('[for="inputPassword2"]','form','button','Sign in')
    })

    // verify the form by inserting the name into the function verifyForms 
    it.only('verify that form exist on the page', ()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.verifyForms('Inline form')
        onFormLayoutsPage.verifyForms('Using the Grid')
        onFormLayoutsPage.verifyForms('Basic form')
        onFormLayoutsPage.verifyForms('Form without labels')
        onFormLayoutsPage.verifyForms('Block form')
        onFormLayoutsPage.verifyForms('Horizontal form')
    })
})