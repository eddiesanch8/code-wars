"use strict";

// 1.You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely
// comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

const mostlyOdd = [1, 3, 5, 6];

function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }

  if (oddCount > evenCount) {
    return integers.find((integer) => integer % 2 === 0);
  } else {
    return integers.find((integer) => integer % 2 !== 0);
  }
}

console.log("Q1: Find the outlier in a given array ", findOutlier(mostlyOdd));

// 2. Create a function that returns the sum of the two lowest positive numbers given an array
// of minimum 4 positive integers. No floats or non-positive integers will be passed.

// 1.create a function
// 2. find the 2 lowest positive integers in a given array
// 3. sort the index to find the lowest positive ints
// 3. add the two lowest together. Minimum of 4 positive ints
// EdgeCase:  there are no floats or non positive ints
// Edge case: repeating int

let testArr = [1, 3, 5, 10, 20, 2];

function sumTwoSmallestNumbers(numbers) {
  let sortedIndex = numbers.sort((a, b) => a - b);
  return sortedIndex[0] + sortedIndex[1];
}

console.log(
  "Q2: Return sum of two lowest positive numbers",
  sumTwoSmallestNumbers(testArr)
);

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455

// 3. You will be given an array of numbers.
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// a. create a function
// b. find odd numbers
// b1. store odd numbers
// c. sort them in ascending order
// c1. go through the array and find those odd numbers
// d. then, add them to the original array while keeping the even numbers in original position
// edge case: large array, keep in mind negative numbers and use !==0

let testArr2 = [2, 5, 4, 1, 5, 10, 20, 3, 6];

function sortArray(array) {
  let sortedOdds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  let oddIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = sortedOdds[oddIndex++];
    }
  }
  return array;
}

console.log(
  "Q3:Sort Odd numbers without unsorting even numebrs",
  sortArray(testArr2)
);

// 4. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// a. write a function that takes two numbers
// b.if they are equal, return them
// else....
// c. find which number is smaller and larger
// c1. find a way to store the sum
// d. find all the numbers between them, ex: -1, 0, 1, 2;
// e add them together
// f return sum

function getSum(a, b) {
  if (a === b) {
    return a;
  }
  let smallestNum = Math.min(a, b);
  let largestNum = Math.max(a, b);
  let finalSum = 0;

  for (let i = smallestNum; i <= largestNum; i++) {
    finalSum += i;
  }
  return finalSum;
}

console.log(
  "Q4:Find sum of all integers between 2 positive/nonpositive integers",
  getSum(-1, 2)
);

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// 5. Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// a. create a function that takes a number
//
// c. return false if it does

// d. if it doesnt, assume its true, and it can be a prime number
// return true

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  // Check all numbers from 2 to num-1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("Q5: Find a prime number", isPrime(3));

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// 6. Given an array of integers your solution should find the smallest integer.

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// a. create a function
// b. sort the array thats passed
// c. find the smallest number
// c. return the smallest number
// edge cases: negative int, same ints

let testArr3 = [1, 2, 3, 4, 10];

function findSmallestInt(arr) {
  let sorted = arr.sort((a, b) => a - b);

  return sorted[0];
}

console.log("Q6: Find the smallest integer", findSmallestInt(testArr3));

// 7. Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// a. write a function that takes a str and a number
// b. find a place to store output
// c. find amount of times needed to conact
// d. add to new string by the number passed
// e. return output

function repeatStr(str, num) {
  let fullStr = "";
  for (let i = 0; i < num; i++) {
    fullStr += str;
  }

  return fullStr;
}

console.log("Q7: Repeat a string", repeatStr("hello", 5));

// 8. Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// a. write a function that takes a string
// b. create a counter for the number of vowels
// c. create a list of vowels
// d. loop through the string, find the vowels

function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(
  "Q8: Find the number of vowels in a given string",
  getCount("wordsofwords")
);
