/**
Given a string and a number ‘K’, find if the string can be rearranged such that the same characters are at least ‘K’ distance apart from each other.

Example 1:

Input: "mmpp", K=2
Output: "mpmp" or "pmpm"
Explanation: All same characters are 2 distance apart.
Example 2:

Input: "Programming", K=3
Output: "rgmPrgmiano" or "gmringmrPoa" or "gmrPagimnor" and a few more  
Explanation: All same characters are 3 distance apart.
Example 3:

Input: "aab", K=2
Output: "aba"
Explanation: All same characters are 2 distance apart.
Example 4:

Input: "aappa", K=3
Output: ""
Explanation: We cannot find an arrangement of the string where any two 'a' are 3 distance apart.


**/

/**
we use que as it is FIFO , we push to queue and if it reaches k length then we will push back to Heap

Following a similar approach, since we were inserting a character back in the heap in the next iteration, in this problem, we will re-insert the character 
after ‘K’ iterations. We can keep track of previous characters in a queue to insert them back in the heap after ‘K’ iterations.

**/

const Heap = require("collections/heap");
const Deque = require("collections/deque");

function reorganize_string(str, k) {
  let freqMap = {};
  for (var i = 0; i < str.length; i++) {
    let left = str[i];
    if (!(left in freqMap)) {
      freqMap[left] = 0;
    }
    freqMap[left] += 1;
  }

  let maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(freqMap).forEach(function(char) {
    maxHeap.push([freqMap[char], char]);
  });
  let result = [];
  let queue = new Deque();
  while (maxHeap.length > 0) {
    let [freq, char] = maxHeap.pop();
    result.push(char);
    queue.push([char, freq - 1]);
    if (queue.length === 2) {
      let [updatedChar, updatedfreq] = queue.shift();
      if (updatedfreq > 0) {
        maxHeap.push([updatedfreq, updatedChar]);
      }
    }
  }
  if (result.length === str.length) {
    return result.join("");
  }
  return "";
}

console.log(`Reorganized string: ${reorganize_string("mmpp", 2)}`);
console.log(`Reorganized string: ${reorganize_string("Programming", 3)}`);
console.log(`Reorganized string: ${reorganize_string("aab", 2)}`);
console.log(`Reorganized string: ${reorganize_string("aapa", 3)}`);

/**
 * Time complexity #
The time complexity of the above algorithm is O(N*logN)O(N∗logN) where ‘N’ is the number of characters in the input string.

Space complexity #
The space complexity will be O(N)O(N), as in the worst case, we need to store all the ‘N’ characters in the HashMap
 */
