///<reference types = "cypress"/>   
//import above will help us to suport cypress methods
describe('First Page Test Suite', ()=> {

    it('first test', ()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //element by Tag Name
        cy.get('input')
        //find element by id
        cy.get('#inputEmail1')
        //by Class name
        cy.get('.input-full-width')
        //by Attribute name
        cy.get('[placeholder]')
        //by Attribute name and value
        cy.get('[placeholder="Email"]')
        //by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')
        //by two different Attributes(you can use even more)
        cy.get('[placeholder="Email"][type="email"]')
        //by Tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //most recommended way to find element by Cypress
        cy.get('[data-cy="imputEmail1"]')

    })

    it('Second Test',()=> {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')
        cy.contains('Sign in').click()
        //to find element by text that contains attribute with value
        cy.contains('[status="warning"]', 'Sign in')
        //to find element that nas not the unique attribute or name or class
        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox').click()
        //to find the element in specific form that contains the element
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

    })
    it('then and wrap methods', ()=> {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // //for grid form, find elements of email and password textbox and assert it to expected text
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // //for basic form find elements of email and password textbox and assert it to expected text
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        //Using THEN to often used elements turn it into JQuery object and use it like parameter for next function:
        cy.contains('nb-card', 'Using the Grid').then( firstFormWithGrid => {
            //creating and taking the text from a new parameter
            const emailLabelFirstForm = firstFormWithGrid.find('[for="inputEmail1"]').text()
            //compare the taken text with expected text
            expect(emailLabelFirstForm).to.equal('Email')
            //creating and taking the text from a new parameter
            const passwordLabelFirstForm = firstFormWithGrid.find('[for="inputPassword2"]').text()
            //compare the taken text with expected text
            expect(passwordLabelFirstForm).to.equal('Password')

            //use already existed parameter from one form for comparing the same text in another parameter in other form 
            cy.contains('nb-card', 'Basic form').then(secondFormWithBasic => {
                //creating and taking the text from a new parameter
                const passwordLabelSecondForm = secondFormWithBasic.find('[for="exampleInputPassword1"]').text()
                //compare the taken textfrom first form with expected text from second form
                expect(passwordLabelFirstForm).to.equal(passwordLabelSecondForm)

                //back to Cypress methods from JQuery with using the WRAP command and compare the expected text in element
                cy.wrap(secondFormWithBasic).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })
        })

    })
    it.only('Invoke command', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //take the text from the element with should command
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //take the text from the element with then command
        cy.get('[for="exampleInputEmail1"]').then(EmailLabelFromBasicForm =>{
            expect(EmailLabelFromBasicForm.text()).to.equal('Email address')
        })

        //take the text from the element with invoke command
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(EmailLabelFromBasicForm => {
            expect(EmailLabelFromBasicForm).to.equal('Email address')

        }) 

        //checkbox are checked with invoke
        cy.contains('nb-card', 'Basic form')
        .find('nb-checkbox')
        .click()
        .find('.custom-checkbox')
        .invoke('attr','class')
        // .should('contain','checked')
        //preper the same verification with then instead of should
        .then(checkboxCheckedValueInClass =>{
            expect(checkboxCheckedValueInClass).to.contain('checked')
        })

    })
})