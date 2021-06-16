var request = require("request");
var options = {
  method: "POST",
  url: "https://petstore.swagger.io/v2/pet",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    id: 17673740,
    category: {
      id: 65979932,
      name: "Marlene",
    },
    name: "Kira",
    photoUrls: ["www.okunevainc.io"],
    tags: [
      {
        id: 76136999,
        name: "Gleason",
      },
    ],
    status: "available",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
