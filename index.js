function calculateTax(amount) {
  let tax = amount * 0.1;
  return tax;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
   if (num1 > num2) { return num1}
   if (num2 > num1) { return num2}
}


console.log(findMaximum(2,3))

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
