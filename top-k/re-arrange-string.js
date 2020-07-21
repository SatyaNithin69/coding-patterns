/**
Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

Example 1:

Input: "aappp"
Output: "papap"
Explanation: In "papap", none of the repeating characters come next to each other.
Example 2:

Input: "Programming"
Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
Explanation: None of the repeating characters come next to each other.
Example 3:

Input: "aapa"
Output: ""
Explanation: In all arrangements of "aapa", atleast two 'a' will come together e.g., "apaa", "paaa".

Algo : 

Build a priority queue that will store all the characters with their frequencies.
Create a variable ‘prev' that will store the previously added character and initialize it with ‘#' character and -1 frequency.
While our queue is not empty.
Remove an element from the queue and add it to the output string.
Decrement the frequency of this element by 1.
Add this element back to the queue if its frequency is > 0.
Set 'prev' variable to this element.
If the length of output string is equal to the input string output the result else output ’Not possible'.


https://iq.opengenus.org/rearrange-string-no-same-adjacent-characters/

**/

const Heap = require("collections/heap");

function rearrange_string(str) {
  let charFrequencyMap = {};
  for (var i = 0; i < str.length; i++) {
    const chr = str[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach(char => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  let resultString = [];
  let prevChar;
  while (maxHeap.length > 0) {
    let [freq, char] = maxHeap.pop();
    if (freq > 0 && prevChar !== char) {
      resultString.push(char);
      freq -= 1;
      maxHeap.push([freq, char]);
      prevChar = char;
    }
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join("");
  }
  return "";
}

console.log(`Rearranged string:  ${rearrange_string("aappp")}`);
console.log(`Rearranged string:  ${rearrange_string("Programming")}`);
console.log(`Rearranged string:  ${rearrange_string("aapa")}`);

/**
Time Complexity
Time complexity of our approach: O(N log N)

In our main method we have two for loops in which the first loop has a time complexity of O(n), second loop has time complexity of O(nlogn) as adding 
an element in the priority queue takes log(n) time. And in the third loop where we are removing and again adding an element the time complexity is again O(nlogn).
Hence after adding all these we get O(nlogn).
**/
