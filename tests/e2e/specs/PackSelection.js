describe("Trial package selection page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Screenshot", () => {
    cy.eyesOpen({
      appName: "Lillydoo!",
      testName: "Lillydoo - package selection",
      browser: { width: 1024, height: 600 },
    });
    cy.eyesCheckWindow("Main Page - desktop ");
    cy.eyesClose();

    cy.eyesOpen({
      appName: "Lillydoo!",
      testName: "Lillydoo - package selection",
      browser: { width: 500, height: 1024 },
    });
    cy.eyesCheckWindow("Main Page - mobile");
    cy.eyesClose();
  });

  it("should update the main image when selecting another package", () => {
    cy.clickOnBanner();
    cy.get(".content__main-image")
      .find("img")
      .should(
        "have.attr",
        "src",
        "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-10.jpg"
      );

    cy.get(".pack-selection__form__buttons .button").eq(2).click();
    cy.get(".content__main-image")
      .find("img")
      .should(
        "have.attr",
        "src",
        "https://www.lillydoo.com/bundles/lepweb/img/trialbox/lillydoo-testpaket-30.jpg"
      );
  });

  it("should update the offers when selecting the right package package", () => {
    cy.clickOnBanner();

    cy.get(".pack-selection__form__buttons .button")
      .eq(0)
      .should("have.class", "button--active");

    cy.get(".pack-offers__items .offer").eq(0).contains("10 Lillydoo diapers");
    cy.get(".pack-offers__items .offer")
      .eq(1)
      .contains("15 wet wipes with 99% water");

    cy.clickTrialPack(3);

    cy.get(".pack-selection__form__buttons .button")
      .eq(0)
      .should(($button) =>
        expect($button[0].className).not.to.contain("button--active")
      );

    cy.get(".pack-offers__items .offer").eq(0).contains("10 Lillydoo diapers");
    cy.get(".pack-offers__items .offer")
      .eq(1)
      .contains("15 sensitive wet wipes");
  });
});
