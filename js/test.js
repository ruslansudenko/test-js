function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
    console.log(i);
  }
  // Change code above this line
  return numbers;
}
console.log(10);

createArrayOfNumbers(1, 5);
