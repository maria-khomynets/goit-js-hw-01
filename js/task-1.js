function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

function calculateTotal(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += 1;
  }
  return sum;
}
console.log(calculateTotal(4));

for (let i = 0; i < 10; i += 1) {
  console.log(i);

  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}

console.log('Log after cycle');
