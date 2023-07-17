describe('headofcontent.de', () => {

  it('displays three current videos', () => {
    cy.visit('/');
    cy.get('#current-videos > a').should('have.length', 3);
  });

  it('displays the three latest blog posts', () => {
    cy.visit('/');
    cy.get('#latest-posts > a').should('have.length', 3);
  });
})
