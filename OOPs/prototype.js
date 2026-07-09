let myheros = ["thor", "ironman"];
let heropower = {
  thor: "hammer",
  ironman: "iron suit",

  getThorPower: function () {
    console.log(`Thor power is ${this.thor}`);
  },
};

Object.prototype.power = function () {
  console.log(`Thor power is present in all objects`);
};

Array.prototype.greeting = function () {
  console.log(`This is an Array.`);
};

// heropower.power();
// myheros.power();
// myheros.greeting();
// heropower.greeting(); //Array prototype function can not be used on an object but an object prototype function can be used on an arrray

// inheritance

const User = {
  name: "Ammar",
  email: "Ammar@google.com",
};

const teacher = {
  makevideo: true,
};

const teachingsupport = {
  isavailable: false,
};

const TAsupport = {
  makeassignment: "js assignment",
  fulltime: true,
  __proto__: teachingsupport,
};

teacher.__proto__ = User;

Object.setPrototypeOf(teachingsupport, teacher);

let myname = "Ammar    ";

String.prototype.truelength = function () {
  console.log(this);
  console.log(`The true length is ${this.trim().length}`);
};

myname.truelength();
