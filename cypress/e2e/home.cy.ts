describe('home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('header is correct', () => {
    cy.getByData("hero-heading")
    .should("exist")
    .contains("Testing Next.js Applications with Cypress")
    
  })

  it("correct homepage features", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})