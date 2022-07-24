

export class formLayoutsPage{
    submitInlineFormWithCheckbox(name,email){
        cy.contains('nb-card','Inline form').find('form').then(form =>{
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }
    submitBasicFormWithCheckbox(email,password){
        cy.contains('nb-card','Basic form').find('form').then(form =>{
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }
    // verify the Sign in button using parents element by its text
    verifySignInUsingTheGridButton(anyElementFromTheForm,parentElement,specificElement,textElement){
        cy.get(anyElementFromTheForm).parents(parentElement).find(specificElement).should('contain', textElement)
    }

    // function for verifing the form by the name of this form
    verifyForms(textHeaderForm){
        cy.contains('nb-card', textHeaderForm).then(form =>{
            cy.wrap(form).should('contain',textHeaderForm)
        })
    }
   
}
//instance of this class, assign it to his object
export const onFormLayoutsPage = new formLayoutsPage()
