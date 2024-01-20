// 🔍 Part 1
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2
const currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3
let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
  let sum = 0;
  for (let aNumber of theNumbers) {
    sum += aNumber * 1; // * 1 is not necessary in this case, but it's there to implicitly convert a string to a number.
  }
  return sum;
}
