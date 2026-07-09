const user = {
  username: "Ammar Khan",
  loginCount: 8,
  signedin: true,

  getuserDetails: function () {
    // console.log("got user details from database.");
    console.log(`username is ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.getuserDetails());
// console.log(user.username);
// console.log(this);

function User(username, loginCount, signedin) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedin = signedin;

  return this;
}

const userOne = User("Ammar", 4, true);
const userTwo = User("subhan", 8, false);
// console.log(new User("Ammar", 4, true));
// console.log(userOne);
// console.log(userTwo);
