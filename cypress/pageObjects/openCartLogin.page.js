class OpenLoginPage {
  get logoutBtn() {
    return cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=account/logout"]');
  }
  get desktopBtn() {
    return cy.get(".nav > :nth-child(1) > .dropdown-toggle");
  }

  get desktopSeeAllBtn() {
    return cy.get(".open > .dropdown-menu > .see-all");
  }

  get productBtn() {
    return cy.get(":nth-child(3) > .product-thumb > :nth-child(2) > .caption > h4 > a");
  }

  get addToCartBtn() {
    return cy.get("#button-cart");
  }

  get addedItemName() {
    return cy.get('.alert > [href="https://demo.opencart.com/index.php?route=product/product&product_id=40"]').invoke("text");
  }

  get myAccountTitle() {
    return cy.get("#content > :nth-child(1)");
  }

  get alertMessage() {
    return cy.get(".alert");
  }

  get deliveryShippingBtn() {
    return cy.get("#button-shipping-address");
  }

  get shippingMethodBtn() {
    return cy.get("#button-shipping-method");
  }

  get privacyCheckbox() {
    return cy.get('[type="checkbox"]');
  }

  get paymentMethodBtn() {
    return cy.get("#button-payment-method");
  }

  get orderedProductName() {
    return cy.get(".table-responsive > .table > tbody > tr > :nth-child(1) > a");
  }

  get confirmOrder() {
    return cy.get("#button-confirm");
  }

  get newShippingAddressBtn() {
    return cy.get(".form-horizontal > :nth-child(3) > label");
  }

  get placedOrderMsg() {
    return cy.get("#content > h1").invoke("text");
  }

  goToCheckout() {
    cy.get("#cart-total").click();
    cy.get('[href="https://demo.opencart.com/index.php?route=checkout/checkout"] > strong').click();
  }

  register(customerData) {
    cy.get("#input-firstname").type(customerData.firstName);
    cy.get("#input-lastname").type(customerData.lastName);
    cy.get("#input-email").type(customerData.email);
    cy.get("#input-telephone").type(customerData.phone);
    cy.get("#input-password").type(customerData.password);
    cy.get("#input-confirm").type(customerData.password);
    cy.get('input[name="agree"]').click();
    cy.get(".btn.btn-primary").click();
  }

  login(customerData) {
    cy.get(".caret").click();
    cy.get(".dropdown-menu-right li:first + li").click();
    cy.get("#input-email").type(customerData.email);
    cy.get("#input-password").type(customerData.password);
    cy.get("form > .btn").click();
  }

  checkoutLogin(customerData) {
    cy.get("#input-email").type(customerData.email);
    cy.get("#input-password").type(customerData.password);
    cy.get("#button-login").click();
  }

  fillInBillingAddress(billingADDress) {
    // this.newShippingAddressBtn.click();
    cy.get("#input-payment-firstname").type(billingADDress.firstName);
    cy.get("#input-payment-lastname").type(billingADDress.lastName);
    cy.get("#input-payment-address-1").type(billingADDress.address.street);
    cy.get("#input-payment-city").type(billingADDress.address.city);
    cy.get("#input-payment-postcode").type(billingADDress.address.zipcode);
    cy.get("#input-payment-country").select("Romania");

    cy.get("#input-payment-zone").select("Suceava");
    cy.get("#button-payment-address").click();
    cy.get("#button-shipping-address").click();
    cy.get("#button-shipping-method").click();
    cy.get('[type="checkbox"]').click();
    cy.get("#button-payment-method").click();
  }
}

export default new OpenLoginPage();
