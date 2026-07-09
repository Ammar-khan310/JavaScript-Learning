function multiplyby5(num) {
  return num * 5;
}

console.log(multiplyby5(5));
console.log(multiplyby5.prototype);

function creatuser(username, score) {
  this.username = username;
  this.score = score;
}

creatuser.prototype.increement = function () {
  this.score++;
};
//creatuser k function k prototype mein humnay apna khud ka function create kr k daala hai

creatuser.prototype.printme = function () {
  console.log(`The score of ${this.username} is ${this.score}`);
};
const first = new creatuser("Ammar", 68);
const second = new creatuser("subhan", 69);
first.increement();
first.printme();
