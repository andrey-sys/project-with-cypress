
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
                    cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                }

            })
            return dateAssert
        }

export class datepickerPage{
    setCommonDatepickerFromCurrent(dayFromToday){
        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            //calling the function and setting the amount of the days 
            let dateAssert = selectDayFromCurrent(dayFromToday)
            //verify the current date in this format (Oct 18, 2022")
            //first option of assertion
            cy.wrap(input).invoke('prop','value').should('contain', dateAssert)
            //second option of assertion
            cy.wrap(input).should('have.value', dateAssert)
        })
    }
    selectRangeInDatepickerFromToday(firstDate, secondDate){
        //find the input element in Common Datepicker and click
        cy.contains('nb-card', 'Datepicker With Range').find('input').then( input => {
            cy.wrap(input).click()
            //calling the function and setting the first date 
            let dateAssertFirst = selectDayFromCurrent(firstDate)
            let dateAssertSecond = selectDayFromCurrent(secondDate)
            const finalFormatDate = dateAssertFirst+' '+'-'+' '+dateAssertSecond
            //first option of assertion
            cy.wrap(input).invoke('prop','value').should('contain',finalFormatDate)
            //second option of assertion
            cy.wrap(input).should('have.value',finalFormatDate)
        })
    }
    
    
}
//instance of this class, assign it to his object
export const onDatepickerPage = new datepickerPage()