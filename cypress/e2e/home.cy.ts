describe('home page', () => {
  it('header is correct', () => {
    cy.visit("http://localhost:3000")
    cy.get("[data-test='hero-heading']")
    .should("exist")
    .contains("Testing Next.js Applications with Cypress")
    
  })

  it.only("correct homepage features", () => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  }

  )
})