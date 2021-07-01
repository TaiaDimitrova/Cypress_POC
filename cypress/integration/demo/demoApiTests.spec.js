import PETS_DATA from "../../fixtures/petsTestData.data";

describe("Api tests", () => {
  let newPetId;
  let url = Cypress.env("PETS_STORE");

  it("Add a pet", () => {
    cy.request({
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(PETS_DATA),
    }).should((response) => {
      cy.log(JSON.stringify(response.body));
      newPetId = response.body.id;
      expect(response.status).to.equal(200);
    });
  });

  it("Get info of the added pet", () => {
    cy.request("GET", `${url}${newPetId}`).should((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.body).to.have.property("name", PETS_DATA.name);
    });
  });

  it("Update a pet status to sold", () => {
    cy.request({
      method: "POST",
      url: `${url}${newPetId}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: "status=sold",
    }).should((response) => {
      expect(response.body.message).to.equal(`${newPetId}`);
    });
  });

  it(`Verify that status for pet with ID ${newPetId} was updated`, () => {
    cy.request("GET", `${url}${newPetId}`).should((response) => {
      expect(response.body).to.have.property("status", "sold");
    });
  });
});
