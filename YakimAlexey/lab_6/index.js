// task 1
var emptyFun = () => undefined;

var task1 = () => {
  alert('Task 1');
  alert(`Calling 'undefined' result function: result is ${emptyFun()}`);
};

// task 2
/**
 * Performs sum of numbers array.
 * @param {number[]} arr
 */
var sumArray = (arr) => arr.reduce((prev, el) => (prev += el), 0);

/**
 * Finds all even numbers and returns even numbers array.
 * @param {number[]} arr
 */
var findAllEvensAsFilter = (arr) => arr.filter((el) => el % 2 == 0);

/**
 * Doubles all elements in array.
 * @param {number[]} arr
 */
var doubleElementsAsMap = (arr) => arr.map((val) => val * 2);

/**
 * Doubles all elements in array.
 * @param {number[]} arr
 */
var doubleElementsInPlace = (arr) => arr.forEach((el, i, arr) => (arr[i] = el * 2));

var task2 = () => {
  alert('Task 2');
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  alert(`Sum (via reduce func) array ${arr}, result is ${sumArray(arr)}`);
  alert(`Find all evens (via filter func) of array ${arr}, result is ${findAllEvensAsFilter(arr)}`);
  alert(`Double elements (via map func) of array ${arr}, result is ${doubleElementsAsMap(arr)}`);
  alert(
    `Double elements (in-place via forEach) of array ${arr}, result is ${doubleElementsInPlace(
      arr,
    )} but array now in ${arr}`,
  );
};

// task 3
/**
 * Sort strings.
 * @param {string[]} arr
 */
var sortEmails = (arr) => arr.sort((a, b) => a.length - b.length);

var task3 = () => {
  alert('Task 3');
  const emails = [
    'magic@mail.ru',
    'lives@gmail.com',
    'here@org.fa.ru',
    'but@inbox.ru',
    'nobody@yandex.ru',
    'sees@gmail.com',
    'it@gmail.com',
  ];
  alert(`before sort ${emails}`);
  let sortedEmails = emails.slice();
  sortedEmails = sortEmails(sortedEmails);
  alert(`after sort ${sortedEmails}`);
};

task1();
task2();
task3();
