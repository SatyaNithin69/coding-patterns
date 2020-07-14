/**
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

https://www.youtube.com/watch?v=k--bSleyD4E
https://www.youtube.com/watch?v=C6xKzkcWZ7k
**/


function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let max = 0;
  let map = {};
  for (var windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in map)) {
      map[rightChar] = 1;
    } else {
      map[rightChar] = map[rightChar] + 1;
    }
    while (Object.keys(map).length > k) {
      const leftChar = str[windowStart];
      windowStart = windowStart + 1;
      map[leftChar] -= 1;
      if (map[leftChar] === 0) {
        delete map[leftChar];
      }
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
}
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
