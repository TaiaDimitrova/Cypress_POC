import LoginPage from "../pageObjects/Login.page";
import USER_DATA from "../fixtures/userTestData.data";

context("Visit google", () => {
  // before(() => {
  //   cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  //   // cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  // });

  // it("Navigate to contact page of the parabank", () => {
  //   cy.get(".caption").should("contain.text", "Experience the difference");
  //   cy.get(".contact > a").click();
  //   cy.get(".title").should("contain.text", "Customer Care");
  // });

  // it("Fill in the contact form", () => {
  //   cy.visit("https://parabank.parasoft.com/parabank/contact.htm");
  //   cy.get("#name").click().type("Hello");
  //   cy.get("#email").type("hello@email.com");
  //   cy.get("#phone").type("021354621");
  //   cy.get("#message").type("thank you for this app!!");
  //   cy.get('[colspan="2"] > .button').click();
  //   cy.get("#rightPanel > :nth-child(3)").should(
  //     "contain.text",
  //     "A Customer Care Representative will be contacting you."
  //   );
  // });

  // it("Register a new account", () => {
  //   cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  //   cy.get(".title").should("contain.text", "Signing up is easy!");
  //   cy.get("[id='customer.firstName']").click().type("test");
  //   cy.get("[id='customer.lastName']").type("Demo Two");
  //   cy.get("[id='customer.address.street']").type("some street");
  //   cy.get("[id='customer.address.city']").type("some city");
  //   cy.get("[id='customer.address.state']").type("some state");
  //   cy.get("[id='customer.address.zipCode']").type("123654");
  //   cy.get("[id='customer.phoneNumber']").type("123654789");
  //   cy.get("[id='customer.ssn']").type("0001235846");
  //   cy.get("[id='customer.username']").type("testDemoTwo");
  //   cy.get("[id='customer.password']").type("testDemoTwo");
  //   cy.get("[id='repeatedPassword']").type("testDemoTwo");
  //   cy.get('[colspan="2"] > .button').click();
  // });

  // it("Login to ParaBank", () => {
  //   cy.get("form > :nth-child(2) > .input").type("testDemoTwo");
  //   cy.get(":nth-child(4) > .input").type("testDemoTwo");
  //   cy.get(":nth-child(5) > .button").click();
  //   cy.get(".title").should("contain.text", "Accounts Overview");
  // });

  it("Register a new account - POM applied", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.get(".title").should("contain.text", "Signing up is easy!");
    LoginPage.register(USER_DATA.userDemo);

    LoginPage.title.should(
      "contain.text",
      `Welcome ${USER_DATA.userDemo.username}`
    );
  });

  it("Optimized login", () => {
    LoginPage.logIn(USER_DATA.userDemo.username, USER_DATA.userDemo.password);
    LoginPage.title.should("contain", "Accounts Overview");
  });
});
