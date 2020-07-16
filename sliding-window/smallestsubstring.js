/**
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".
Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.

https://www.youtube.com/watch?v=GZjW14vX2Ps
**/

function find_substring(str, pattern) {
  let minLength = str.length + 1;
  let start = 0;
  let freqMap = {};
  let matched = 0;
  var substringstart = 0;
  for (var i = 0; i < pattern.length; i++) {
    if (!(pattern[i] in freqMap)) {
      freqMap[pattern[i]] = 0;
    }
    freqMap[pattern[i]] += 1;
  }
  for (var end = 0; end < str.length; end++) {
    var right = str[end];
    if (right in freqMap) {
      freqMap[right] -= 1;
      if (freqMap[right] >= 0) {
        matched += 1;
      }
    }

    while (matched === pattern.length) {
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
        substringstart = start;
      }
      if (str[start] in freqMap) {
        if (freqMap[str[start]] >= 0) {
          matched -= 1;
        }
        freqMap[str[start]] += 1;
      }
      start += 1;
    }
  }
  if (minLength > str.length) {
    return "";
  }
  return str.substring(substringstart, substringstart + minLength);
}
console.log(find_substring("aabdec", "abc"));
console.log(find_substring("abdabca", "abc"));
console.log(find_substring("adcad", "abc"));

/**
Time Complexity #
The time complexity of the above algorithm will be O(N + M)O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.

Space Complexity #
The space complexity of the algorithm is O(M)O(M) since in the worst case, the whole pattern can have distinct characters which will go into the HashMap.
In the worst case, we also need O(N)O(N) space for the resulting substring, which will happen when the input string is a permutation of the pattern.
**/
