describe('main spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Given Date(2016, 0, 1), it should render 01/01/2016', () => {
    cy.get('[data-testid="mmddyyyy"]').should('include.text', '01/01/2016');
  });

  it('Given Date(2016, 0, 1) and new Date(2017, 0, 1), it should render 01/01/2016, the date with the min value', () => {
    cy.get('[data-testid="dfns-min"]').should('include.text', '01/01/2016');
  });

  it('Given Date(2016, 0, 1) and new Date(2017, 0, 1), it should render "dim. janvier 1 2017", because the default locale is fr, and 2017 is the max date', () => {
    cy.get('[data-testid="dfns-max"]').should(
      'include.text',
      'dim. janvier 1 2017'
    );
  });

  it('Given current Date() minus 6 days, it should render "hace 6 días"', () => {
    cy.get('[data-testid="distance-es"]').should('include.text', 'hace 6 días');
  });

  it('Given the weekday with index 0, it should render "lunes"', () => {
    cy.get('[data-testid="weekday-es"]').should('include.text', 'lunes');
  });

  it('Given "12 de Marzo", it should render "03/12/2010"', () => {
    cy.get('[data-testid="parse-es"]').should('include.text', '03/12/2010');
  });
});
