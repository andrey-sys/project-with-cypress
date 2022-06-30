///<reference types = "cypress" /> 

const { wrap } = require("module")
const { type } = require("os")

describe('Second Test suite', ()=>{

    it('Advanced Datapicker', ()=> {
        //function for setting any amount of days(1,5,45,300...)
        //and it will set the day in datepicker from current day
        //also it check if you on the current month, if not it will click the
        //next right button and check again
        //if it on current month the day will be clicked
        function selectDayFromCurrent(day){
            let date = new Date()
            date.setDate((date.getDate()) + day)//if using past date change to -
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleString('default', {month: 'short'})
            let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if(!dateAttribute.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click()//to use left button change to left
                    selectDayFromCurrent(day)
                }else{
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                }

            })
            return dateAssert
        }

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            //calling the function and setting the amount of the days 
            let dateAssert = selectDayFromCurrent(94)
            //verify the current date in this format (Oct 18, 2022")
            cy.wrap(input).invoke('prop','value').should('contain', dateAssert)

        })
       
    })

    it('Tooltip and so on', ()=>{
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips').find('button').then(button =>{
            cy.wrap(button).contains('Default').click()
            cy.get('nb-tooltip').should('contain', 'This is a tooltip')
            
        })
    })
    it.only('alert popup', ()=>{
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('tbody tr').eq(0).find('.nb-trash').click()
        //1 option to use popup: to get access to the popup, 
        //check if the event(window:confirm) is fired up and click the yes button(confirm it)
        cy.on('window:confirm', (confirm => {
            expect(confirm).to.equal('Are you sure you want to delete?')
        }))

        //2 option to use popup: better way to access to the popup
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(0).find('[class="nb-trash"]').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        }) 
        
        //cancel the popup
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)
    })
})