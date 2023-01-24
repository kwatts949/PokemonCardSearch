describe("Pokemon App", () => {
  it("can enter a Pokemon name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Moltres");
    cy.get("button").click();
  });
});
