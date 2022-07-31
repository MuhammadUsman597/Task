describe('empty spec', () => {
    it('passes', () => {
        cy.visit('https://www.abhi.com.pk')
        cy.scrollTo('bottom')
        cy.contains('Contact').click({force: true})
        cy.get('.name_first')
            .should('have.value','')
            .type('Usman')
            .should('have.value','');
        cy.get('.ginput_container_email')
            .should('have.value', '');
        cy.get('.ginput_container_email')
            .type('usmankhalid1022@gmail.com');
        cy.get('#input_5_3')
            .type('Test');
        cy.get('#input_5_4')
            .select('11-50')
            .should('have.value', '11-50');
        cy.get('#input_5_5')
            .type('www.test.com')
            .should('have.value', 'www.test.com');
        cy.get('#input_5_6')
            .type('Owner')
            .should('have.value', 'Owner');
        cy.get('#input_5_9')
            .type('+9231212312312')
            .should('have.value', '+9231212312312');
        cy.get('#input_5_10')
            .type('Lahore')
            .should('have.value', 'Lahore');
        cy.get('#choice_5_12_1')
            .check()
            .should('be.checked');
        cy.get('#choice_5_12_2')
            .should('not.be.checked');
        cy.get('#choice_5_12_3')
            .should('not.be.checked');
        cy.get('#choice_5_12_4')
            .should('not.be.checked');
        cy.get('#choice_5_12_5')
            .should('not.be.checked');
        cy.get("#input_5_13")
            .select('Instagram')
            .should('have.value', 'Instagram');
        cy.get('#input_5_14')
            .type('Test Submission')
            .should('have.value', 'Test Submission');
        cy.get('#gform_5')
            .submit();
        cy.contains('Thank you for contacting ABHI.')
            .should('be.visible');
  })
})
  