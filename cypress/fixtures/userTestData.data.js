const USER_DATA = {
  userTestAgain: {
    firstName: "test",
    lastName: "Again",
    email: "userTest@again.com",
    address: {
      street: "some street",
      city: "some city",
      state: "some state",
      zipcode: "12365",
    },
    phone: "012365478",
    ssn: "02333111",
    username: "testAgain",
    password: "testAgain",
  },

  userDemo3: {
    firstName: "user",
    lastName: "Demo three",
    email: "user@demo3.com",
    address: {
      street: "some street",
      city: "some city",
      state: "some state",
      zipcode: "123625",
    },
    phone: "012365478",
    ssn: "02333111",
    username: "userDemo3",
    password: "userDemo3",
  },

  userDemo: {
    firstName: "user",
    lastName: "Demo",
    email: `user${Date.now()}@demo.com`,
    address: {
      street: "some street",
      city: "some city",
      state: "some state",
      zipcode: "123625",
    },
    phone: "012365478",
    ssn: "02333111",
    username: "userDemo",
    password: "userDemo",
  },

  userDemoExisting: {
    firstName: "user",
    lastName: "Demo",
    email: "user1624004870499@demo.com",
    address: {
      street: "some street",
      city: "some city",
      state: "some state",
      zipcode: "123625",
    },
    phone: "012365478",
    ssn: "02333111",
    username: "userDemo",
    password: "userDemo",
  },
};

module.exports = USER_DATA;
