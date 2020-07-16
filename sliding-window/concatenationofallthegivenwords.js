/**
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
Example 2:

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".

https://www.youtube.com/watch?v=Bbu4Qjzf7A0

**/

function find_word_concatenation(str, words) {
  if (str.length === 0 || words.length === 0) {
    return [];
  }
  let result = [];
  let wordFrequency = {};
  var word_index;
  var word;
  words.forEach(function(word) {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });
  let wordsCount = words.length;
  let wordsLength = words[0].length;
  for (var i = 0; i < str.length - wordsCount * wordsLength + 1; i++) {
    let word_seen = {};
    for (var j = 0; j < wordsCount; j++) {
      word_index = i + j * wordsLength;
      word = str.substring(word_index, word_index + wordsLength);
      if (!(word in wordFrequency)) {
        break;
      }
      if (!(word in word_seen)) {
        word_seen[word] = 0;
      }
      word_seen[word] += 1;
      if (word_seen[word] > (wordFrequency[word] || 0)) {
        break;
      }
      if (j + 1 === wordsCount) {
        result.push(i);
      }
    }
  }
  return result;
}
console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));


/**
Time Complexity #
The time complexity of the above algorithm will be O(N * M * Len)O(N∗M∗Len) where ‘N’ is the number of characters in the given string, ‘M’ is the total number of words, and ‘Len’ is the length of a word.

Space Complexity #
The space complexity of the algorithm is O(M)O(M) since at most, we will be storing all the words in the two HashMaps. In the worst case, we also need O(N)O(N) space for the resulting list. So, the overall space complexity of the algorithm will be O(M+N).O(M+N).

**/
