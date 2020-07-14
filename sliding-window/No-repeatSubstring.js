/**
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
**/

function non_repeat_substring(str) {
  let start = 0;
  var maxLength = 0;
  var charIndexMap = {};

  for (var end = 0; end < str.length; end++) {
    var right = str[end];
    if (right in charIndexMap) {
      start = charIndexMap[right] + 1;
    }
    charIndexMap[right] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabcabb")}`
);
/**
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N) where ‘N’ is the number of characters in the input string.

Space Complexity #
The space complexity of the algorithm will be O(K)O(K) where KK is the number of distinct characters in the input string. This also means K<=NK<=N, because in the worst case, the whole string might not have any repeating character so the entire string will be added to the HashMap. Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1)O(1); in this case, we can use a fixed-size array instead of the HashMap.
**/
