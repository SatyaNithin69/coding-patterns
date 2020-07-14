/**

Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

https://www.youtube.com/watch?v=lkqpHmgnXSI

**/

function fruits_into_baskets(fruits) {
  let start = 0;
  let fruits_frequencey = {};
  let maxlength = 0;
  for (var end = 0; end < fruits.length; end++) {
    var rightFruit = fruits[end];
    if (!(rightFruit in fruits_frequencey)) {
      fruits_frequencey[rightFruit] = 1;
    } else {
      fruits_frequencey[rightFruit] = fruits_frequencey[rightFruit] + 1;
    }
    while (Object.keys(fruits_frequencey).length > 2) {
      var leftFruit = fruits[start];
      fruits_frequencey[leftFruit] = fruits_frequencey[leftFruit] - 1;
      if (fruits_frequencey[leftFruit] === 0) {
        delete fruits_frequencey[leftFruit];
      }
      start = start + 1;
    }
    maxlength = Math.max(maxlength, end - start + 1);
  }
  return maxlength;
}

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "A", "C"])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "C",
    "B",
    "B",
    "C"
  ])}`
);
/**
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N) where ‘N’ is the number of characters in the input array. The outer for loop runs for all characters and the inner while loop processes each character only once, therefore the time complexity of the algorithm will be O(N+N)O(N+N) which is asymptotically equivalent to O(N)O(N).

Space Complexity #
The algorithm runs in constant space O(1)O(1) as there can be a maximum of three types of fruits stored in the frequency map.
**/
