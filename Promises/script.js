// Implement a JavaScript Promise to determine whether a randomly generated number is successful or unsuccessful.

let asn = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 10);
  //   console.log(n);
  if (n < 5) {
    return resolve();
  } else {
    return reject();
  }
});

asn

  .then(function () {
    // console.log("resolve");
  })
  .catch(function () {
    // console.log("reject");
  });

//   Even or Odd

let pr = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 10);
  console.log(n);
  if (n === 0) {
    console.log(`The number is zero`);
  } else if (n % 2 === 0) {
    return resolve();
  } else {
    return reject();
  }
});

pr.then(function () {
  console.log(`The number is an even number`);
}).catch(function () {
  console.log(`The number is an odd number`);
});

// Age Verification

let age = new Promise((resolve, reject) => {
  let num = prompt;
});
