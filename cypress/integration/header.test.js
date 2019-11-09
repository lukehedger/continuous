describe("App", function() {
  it("Should have a header", function() {
    cy.visit("http://localhost:5000");

    cy.get(".app-heading").should("contain", "Continuous");
  });
});
