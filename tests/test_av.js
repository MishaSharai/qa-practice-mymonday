describe('Test filter av.by', () => {
    it('Does not do much!', () => {
        cy.viewport(1280, 800)
        cy.visit('www.av.by')
        cy.get('.nav__main > :nth-child(1) > .nav__link').click()
        cy.get(':nth-child(4) > :nth-child(1) > .catalog__link > .catalog__title').click();
        cy.get(':nth-child(5) > :nth-child(1) > .catalog__link > .catalog__title').click();
        cy.get('.filter-models__row > :nth-child(3) > .dropdown > .dropdown__controls > .dropdown__box > .dropdown-floatlabel > .dropdown-floatlabel__box').click();
        cy.get(':nth-child(6) > .dropdown__card-button > .dropdown__card-image').click();
        cy.get(':nth-child(1) > .richinput-control > .richinput-control__box').type('13000');
        cy.get(':nth-child(2) > .richinput-control > .richinput-control__box').type('20000');
        cy.get('#p-11-engine_capacity > .dropdown__controls > :nth-child(1) > .dropdown__control > .dropdown-floatlabel__box').click();
        cy.get('#p-11-engine_capacity > .dropdown__controls > :nth-child(1) > .dropdown-list > :nth-child(12) > .dropdown__listbutton').click();
        cy.get('[for="p-12-transmission_type_1"] > .button-group__text').click();
        cy.get('#p-13-body_type > .dropdown__controls > .dropdown__box > .dropdown__control').click()
        cy.get(':nth-child(14) > .checkbox > .checkbox__description').click()
        cy.get('#p-14-engine_type > .dropdown__controls > .dropdown__box > .dropdown__control').click()
        cy.get(':nth-child(1) > .button__text > span').click()
        cy.get('#p-19-condition > .dropdown__controls > .dropdown__box > .dropdown__control').click()
        cy.get('#p-19-condition > .dropdown__controls > .dropdown__box > .dropdown-list > :nth-child(3) > .checkbox > .checkbox__description').click()
        cy.get('#p-19-condition > .dropdown__controls > .dropdown__box > .dropdown__control').click()
        cy.get('#p-21-mileage_km > .dropdown__controls > .dropdown__box > .dropdown__control').click()
        cy.get('#p-21-mileage_km > .dropdown__controls > .dropdown__box > .dropdown-list > :nth-child(13) > .dropdown__listbutton').click()
        cy.get('.filter__show-result > .button').click()
        cy.get('.listing__sort > .dropdown > .dropdown__controls > .dropdown__box > .dropdown__control').click()
        cy.get('.listing__sort > .dropdown > .dropdown__controls > .dropdown__box > .dropdown-list > :nth-child(2) > .dropdown__listbutton').click()
      

    })
  })