function calculateTax(amount) {
  let tax = amount * 0.1;
  return tax;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
