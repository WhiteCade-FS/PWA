const { sumOfArray, reverseString, isPalindrome, purgeDuplicates } = require('./functions.js');


describe('sumOfArray', () => {
  test('returns the sum of [1, 2, 3, 4]', () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
  });

  test('returns 0 for empty array', () => {
    expect(sumOfArray([])).toBe(0);
  });

  test('sums negative numbers correctly', () => {
    expect(sumOfArray([-1, -2, -3])).toBe(-6);
  });

  test('throws error for non-array input', () => {
    expect(() => sumOfArray('not an array')).toThrow('Input must be an array');
  });
});

describe('reverseString', () => {
  test('reverses "hello" to "olleh"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test('reverses numeric string "123" to "321"', () => {
    expect(reverseString("123")).toBe("321");
  });

  test('throws error for non-string input', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string');
  });
});

describe('isPalindrome', () => {
  test('"Racecar" is a palindrome', () => {
    expect(isPalindrome("Racecar")).toBe(true);
  });

  test('"hello" is not a palindrome', () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test('"A man, a plan, a canal, Panama" is a palindrome', () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});

describe('purgeDuplicates', () => {
  test('removes duplicate numbers', () => {
    expect(purgeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('removes duplicate strings', () => {
    expect(purgeDuplicates(["a", "b", "a"])).toEqual(["a", "b"]);
  });

  test('throws error for non-array input', () => {
    expect(() => purgeDuplicates("not an array")).toThrow('Input must be an array');
  });
});
