/// <reference types="cypress" />
import OpenLoginPage from "../pageObjects/openCartLogin.page";
import USER_DATA from "../fixtures/userTestData.data";

context("UI tests for Open Cart", () => {
  it("Register an account", () => {
    cy.visit("account/register");
    OpenLoginPage.register(USER_DATA.userDemo);
    cy.url().should("include", "/success");
    OpenLoginPage.logoutBtn.click();
  });

  it("Ad Item to cart", () => {
    cy.visit("common/home");
    OpenLoginPage.desktopBtn.click();
    OpenLoginPage.desktopSeeAllBtn.click();
    OpenLoginPage.productBtn.click();
    OpenLoginPage.addToCartBtn.click();
    OpenLoginPage.alertMessage.should("contain.text", `Success: You have added `);
  });

  it("Place an order", () => {
    OpenLoginPage.goToCheckout();
    OpenLoginPage.checkoutLogin(USER_DATA.userDemo);
    OpenLoginPage.fillInBillingAddress(USER_DATA.userDemo);
    OpenLoginPage.confirmOrder.click();
    cy.get("#content > h1").should((el) => {
      expect(el).to.contain("Your order has been placed!");
    });
  });

  //   it("Select delivery method", () => {
  //   });

  //   it("Select shipping method", () => {
  //   });

  //   it("Select payment method", () => {
  //   });

  // describe("Place an order", () => {
  //     it("Ad Item to cart", () => { });

  //   context("Checkout", () => {

  //     it('Fill in delivery details', () => {})

  //     it('Select payment method', () => { })

  //     it('Confirm order', () => {})
  //   });
  // });
});
