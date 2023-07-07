describe('headofcontent.de', () => {

  it('renders the homepage', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Junge, unabhänige Reportagen aus der Hauptstadt');
  });

  it('displays three current videos', () => {
    cy.visit('/');
    cy.get('#current-videos > a').should('have.length', 3);
  });

  it('displays the three latest blog posts', () => {
    cy.visit('/');
    cy.get('#latest-posts > a').should('have.length', 3);
  });

  it('embeds the youtube videos correctly', () => {
    cy.visit('/');
    cy.get('#current-videos > a').first().click();

    cy.url().should('contain', 'youtube.com');
  });
})
