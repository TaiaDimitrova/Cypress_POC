/// <reference types="cypress" />
import OpenCartPage from "../../pageObjects/demo.page";
import USER_DATA from "../../fixtures/userTestData.data";

context("UI tests for Open Cart", { retries: 3 }, () => {
  /**
   * You can choose to retry failed tests up to a certain number of times.
   */

  /**
   * Hooks will run in the order they are defined,
   * as appropriate; all before() hooks run (once), then any beforeEach() hooks,
   * tests, any afterEach() hooks, and finally after() hooks (once).
   */
  before("Set screen resolution", () => {
    cy.viewport(1250, 780);
  });

  /**
   * The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the function.
   */
  it.only("Register an account", () => {
    cy.visit("account/register");
    OpenCartPage.register(USER_DATA.userDemo);
    cy.url().should("include", "/success");
    OpenCartPage.logoutBtn.click();
  });

  it("Ad Item to cart", () => {
    cy.visit("common/home");
    OpenCartPage.desktopBtn.click();
    OpenCartPage.desktopSeeAllBtn.click();
    OpenCartPage.productBtn.click();
    OpenCartPage.addToCartBtn.click();
    OpenCartPage.alertMessage.should("contain.text", `Success: You have added `);
  });

  /**
   * By appending .skip(), you may tell Mocha to ignore test case(s). Anything skipped will be marked as pending, and reported as such.
   */
  it.skip("Place an order", () => {
    OpenCartPage.goToCheckout();
    OpenCartPage.checkoutLogin(USER_DATA.userDemo);
    OpenCartPage.fillInBillingAddress(USER_DATA.userDemo);
    OpenCartPage.confirmOrder.click();
    OpenCartPage.successMessage.should((el) => {
      expect(el).to.contain("Your order has been placed!");
    });
  });

  after("Final message: ", () => {
    cy.log("All selected tests were executed!!");
  });
});
