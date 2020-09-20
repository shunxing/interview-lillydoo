import "@applitools/eyes-cypress/commands";

Cypress.Commands.add("clickOnBanner", () => {
  cy.get(".button.banner__introduction__button").click();
  cy.url().should("include", "#packSelection");
  cy.get(".pack-selection").should("be.visible");
});

Cypress.Commands.add("clickTrialPack", (packIndex) => {
  cy.get(".pack-selection__form__buttons .button").eq(packIndex).click();

  cy.get(".pack-selection__form__buttons .button")
    .eq(packIndex)
    .should("have.class", "button--active");
});
