function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

function foo(x, y) {
  const dayTotal = x * 8;
  const total = dayTotal * y;
  return total;
}
const pe = foo(200, 20);
const pt = foo(200, 15);
const pg = foo(170, 21);

console.log('pe', pe);
console.log('pt', pt);
console.log('pg', pg);

function imt(v, z) {
  const weight = Number.parseFloat(v.replace(',', '.'));
  console.log(weight);
  const height = Number.parseFloat(z * z);
  const index = weight / height;
  return index.toFixed(1);
}
const rez = imt('64,5', '1.67');
console.log('ind', rez);
