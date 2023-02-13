describe("Currency Converter", () => {
  it("fetches currency items - GET", () => {
    cy.request("https://api.exchangerate-api.com/v4/latest/EUR").as(
      "currencyRequest"
    );
    cy.get("@currencyRequest").then((req) => {
      expect(req.status).to.eq(200);
      assert.isObject(req.body, 'Request Response is an object')
    });
  });
});
