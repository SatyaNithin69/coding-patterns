/**

https://www.youtube.com/watch?v=8bCdNqjFS50


Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.

**/

function backspace_compare(str1, str2) {
  let index1 = str1.length - 1;
  let index2 = str2.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1);
    let i2 = get_next_valid_char_index(str2, index2);

    if (str1[i1] !== str2[i2]) {
      return false;
    }
    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}
function get_next_valid_char_index(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      break;
    }
    index--;
  }
  return index;
}
console.log(backspace_compare("xy#z", "xzz#"));
console.log(backspace_compare("xy#z", "xyz#"));
console.log(backspace_compare("xp#", "xyz##"));
console.log(backspace_compare("xywrrmp", "xywrrmu#p"));

/**
Time complexity #
The time complexity of the above algorithm will be O(M+N)O(M+N) where ‘M’ and ‘N’ are the lengths of the two input strings respectively.

Space complexity #
The algorithm runs in constant space O(1)
**/
