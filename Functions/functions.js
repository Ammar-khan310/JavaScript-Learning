//
function checkNum(a) {
  if (a > 0) {
    console.log(`number ${a} is greater than zero. `);
  } else if (a < 0) {
    console.log(`number ${a} is smaller than zero. `);
  } else {
    console.log(`number ${a} is zero. `);
  }
}
checkNum(0);

//
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

const arr = [1, 2, 3, 4, 5];
