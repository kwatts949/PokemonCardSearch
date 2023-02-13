describe("Pokemon Search", () => {
  it("fetches pokemon items - GET", () => {
    let pokemonName = "Pikachu"
    let pokemonSet = "crown*"
    cy.request(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}* set.name:${pokemonSet}&orderBy=-set.releaseDate`).as(
      "pokemonRequest"
    );
    cy.get("@pokemonRequest").then((req) => {
      expect(req.status).to.eq(200);
      assert.isObject(req.body, 'Request Response is an object')
      assert.isArray(req.body.data, 'Request Response data is an array')
    });
  });
});