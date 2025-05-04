function sumOfArray(numbers) {
  if (!Array.isArray(numbers)) throw new Error("Input must be an array of numbers");
  return numbers.reduce((sum, currentNumber) => {
    return sum + (typeof currentNumber === 'number' ? currentNumber : 0);
  }, 0);
}

function reverseString(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  return text.split('').reverse().join('');
}

function isPalindrome(phrase) {
  if (typeof phrase !== 'string') throw new Error("Input must be a string");
  const forwardInput = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverseInput = forwardInput.split('').reverse().join('');
  return forwardInput === reverseInput;
}


function purgeDuplicates(values) {
  if (!Array.isArray(values)) throw new Error("Input must be an array");
  return [...new Set(values)];
}


module.exports = {
  sumOfArray,
  reverseString,
  isPalindrome,
  purgeDuplicates
};


