function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

function checkFileExtension(fileName, ext) {
  const messageName = fileName.endsWith(ext);

  if (messageName) {
    return 'File extension matches';
  } else {
    return 'File extension does not match';
  }
}
console.log(checkFileExtension('styles.css', '.js'));
console.log(checkFileExtension('styles.css', '.css'));
console.log(checkFileExtension('app.js', '.js'));
console.log(checkFileExtension('app.js', '.html'));
console.log(checkFileExtension('index.html', '.html'));
console.log(checkFileExtension('index.html', '.html'));

function getFileName(file) {
  const mes = file.indexOf('.');

  if (mes === -1) {
    return file;
  } else {
    return file.slice(0, mes);
  }
}

console.log(getFileName('styles.css'));
console.log(getFileName('app.js'));
console.log(getFileName('app'));
