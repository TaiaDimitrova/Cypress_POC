import PETS_DATA from "../fixtures/petsTestData.data.json";

describe("Api tests", () => {
  let availablePetsNr;
  let soldPetsNr;

  it("get inventory", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/store/inventory").should((response) => {
      availablePetsNr = response.body["available"];
      soldPetsNr = response.body["sold"];
      expect(response.body).to.have.property("available");
    });
  });

  it("add pet", () => {
    cy.log("PETS_DATA", JSON.stringify(PETS_DATA));

    cy.request("POST", "https://petstore.swagger.io/v2/pet", JSON.stringify(PETS_DATA));

    cy.request("GET", "https://petstore.swagger.io/v2/store/inventory").should((response) => {
      expect(availablePetsNr).to.equal(response.body["available"] + 1);
    });
  });

  //   it("get pet info", () => {
  //     cy.request("GET", `https://petstore.swagger.io/v2/pet/${17673740}`).should(
  //       (response) => {
  //         cy.log(JSON.stringify(response.body));
  //         expect(response.body).to.have.property("name", "Kira");
  //       }
  //     );
  //   });

  //   it("check the addresses list", () => {
  //     cy.request("http://a.testaddressbook.com/addresses").as("addresses");

  //     cy.get("@addresses").should((response) => {
  //       cy.log("response:", response);
  //       expect(response).to.have.property("X-Request-Id");
  //     });
  //   });
});
