describe("Pokemon App", () => {
  it("can enter a Pokemon name", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Moltres");
    cy.get("button").click();
  });

  it("can select Crown Zenith", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Moltres");
    cy.get("select").select("Crown Zenith");
    cy.get("button").click();
  });

  it("can select Astral Radiance", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Pikachu");
    cy.get("select").select("Astral Radiance");
    cy.get("button").click();
  });

  it("can select most recent version", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("Pikachu");
    cy.get("select").select("Most recent version");
    cy.get("button").click();
    cy.should("contain.text", "Search for cards!");
    cy.get(".display > :nth-child(1)");
  });

  describe("check for html elements", () => {
    it(".navbar", () => {
      cy.visit("http://localhost:3000/");
      cy.get(".navbar").should("exist");
    });
    it(".display", () => {
      cy.visit("http://localhost:3000/");
      cy.get(".display").should("exist");
    });
  });

  describe("check that img element loads correctly", () => {
    it("img", () => {
      cy.visit("http://localhost:3000/");
      cy.get("input").type("Pikachu");
      cy.get("select").select("Most recent version");
      cy.get("button").click();
      cy.get("img", { timeout: 6000 }).should("exist");
    });
  });

  describe("check that the set title element loads correctly", () => {
    it("set title element", () => {
      cy.visit("http://localhost:3000/");
      cy.get("input").type("Pikachu");
      cy.get("select").select("Most recent version");
      cy.get("button").click();
      cy.get(".display > :nth-child(2)", { timeout: 6000 }).should("exist");
      cy.get(".display > :nth-child(2)", { timeout: 6000 }).should(
        "contain.text",
        "Set: Crown Zenith"
      );
    });
  });

  describe("check that the name element loads correctly", () => {
    it("name element", () => {
      cy.visit("http://localhost:3000/");
      cy.get("input").type("Pikachu");
      cy.get("select").select("Most recent version");
      cy.get("button").click();
      cy.get(".display > :nth-child(1)", { timeout: 6000 }).should("exist");
      cy.get(".display > :nth-child(1)", { timeout: 6000 }).should(
        "contain.text",
        "Pikachu"
      );
    });
  });

  describe("check that no results is loaded correctly", () => {
    it("name element", () => {
      cy.visit("http://localhost:3000/");
      cy.get("input").type("Pikachu");
      cy.get("select").select("Scarlett and Violet");
      cy.get("button").click();
      cy.get(".display > :nth-child(1)", { timeout: 6000 }).should("exist");
      cy.get(".display > :nth-child(1)", { timeout: 6000 }).should(
        "contain.text",
        "No results found, try a different combo"
      );
    });
  });
});
