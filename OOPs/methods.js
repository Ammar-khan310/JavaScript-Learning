class USER {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}
class admin extends USER {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach(function (element) {
      element.remove();
    });
  }
}

let user1 = new USER("Ammar", "North karachi", "ammarkhn", "ammar@gmail.com");
let user2 = new USER(
  "Ammar2",
  "North karachi",
  "ammarkhn2",
  "ammar2@gmail.com",
);

let a1 = new admin("Admin", "Pakistan", "aaa_aaa", "aaa@aa.aaaa");

let coffe = {
  color: "dark brown",
  drink: function () {
    console.log("Coffe finished!");
  },
};

let mocha = Object.create(coffe);
console.log(mocha);
