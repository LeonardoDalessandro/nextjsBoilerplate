describe("[E2E TEST][NAVIGATION] Index page", () => {
  describe("WHEN I visit index page,", () => {
    it("I should see about card", () => {
      cy.visit("http://localhost:3000");

      cy.get('a[href*="/about"]').contains("Documentation");
    });
  });

  describe("THAN, on click,", () => {
    it("I should visit about page AND try to find some content", () => {
      cy.get('a[href*="/about"]').click();

      cy.url().should("include", "/about");

      cy.get("h1").contains("ABOUT PAGE");
    });
  });
});
