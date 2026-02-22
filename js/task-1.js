function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

const quarterOf = month => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return 2;
    case 7:
    case 8:
    case 9:
      return 3;
    case 10:
    case 11:
    case 12:
      return 4;
  }
};

function updateLight(current) {
  const colorGreen = 'green';
  const colorYellow = 'yellow';
  const colorRed = 'red';
  if (current === colorGreen) {
    return colorYellow;
  } else if (current === colorYellow) {
    return colorRed;
  } else {
    return colorGreen;
  }
}

console.log(updateLight('green'));
