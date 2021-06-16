class LoginPage {
  logIn(username, password) {
    cy.get("form > :nth-child(2) > .input").type(username);
    cy.get(":nth-child(4) > .input").type(password);
    cy.get(":nth-child(5) > .button").click();
  }

  register(customerData) {
    cy.get("[id='customer.firstName']").click().type(customerData.firstName);
    cy.get("[id='customer.lastName']").type(customerData.lastName);
    cy.get("[id='customer.address.street']").type(customerData.address.street);
    cy.get("[id='customer.address.city']").type(customerData.address.city);
    cy.get("[id='customer.address.state']").type(customerData.address.state);
    cy.get("[id='customer.address.zipCode']").type(
      customerData.address.zipcode
    );
    cy.get("[id='customer.phoneNumber']").type(customerData.phone);
    cy.get("[id='customer.ssn']").type(customerData.ssn);
    cy.get("[id='customer.username']").type(customerData.username);
    cy.get("[id='customer.password']").type(customerData.password);
    cy.get("[id='repeatedPassword']").type(customerData.password);
    cy.get('[colspan="2"] > .button').click();
  }

  get title() {
    return cy.get(".title");
  }
}

export default new LoginPage();
