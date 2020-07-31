/**
For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

Example 1:

Input: N=2
Output: (()), ()()
Example 2:

Input: N=3
Output: ((())), (()()), (())(), ()(()), ()()()

**/

class Parenthesis {
  constructor(str, open, close) {
    this.str = str;
    this.open = open;
    this.close = close;
  }
}

function generate_valid_parentheses(num) {
  let result = [];
  let store = [];
  store.push(new Parenthesis("", 0, 0));
  while (store.length > 0) {
    let current = store.shift();
    if (current.open === num && current.close === num) {
      result.push(current.str);
    } else {
      if (current.open < num) {
        store.push(
          new Parenthesis(`${current.str}(`, current.open + 1, current.close)
        );
      }
      if (current.open > current.close) {
        store.push(
          new Parenthesis(`${current.str})`, current.open, current.close + 1)
        );
      }
    }
  }
  return result;
}
console.log(
  `All combinations of balanced parentheses are: ${generate_valid_parentheses(
    2
  )}`
);

/**
Time complexity #
Let’s try to estimate how many combinations we can have for ‘N’ pairs of balanced parentheses. If we don’t care for the ordering - that ) can only come after ( - then we have two options for every position, i.e., either put open parentheses or close parentheses. This means we can have a maximum of 2^N2
​N
​​  combinations. Because of the ordering, the actual number will be less than 2^N2
​N
​​ .

If you see the visual representation of Example-2 closely you will realize that, in the worst case, it is equivalent to a binary tree, where each node will have two children. This means that we will have 2^N2
​N
​​  leaf nodes and 2^N-12
​N
​​ −1 intermediate nodes. So the total number of elements pushed to the queue will be 2^N2
​N
​​  + 2^N-1,2
​N
​​ −1, which is asymptotically equivalent to O(2^N)O(2
​N
​​ ). While processing each element, we do need to concatenate the current string with ( or ). This operation will take O(N)O(N), so the overall time complexity of our algorithm will be O(N*2^N)O(N∗2
​N
​​ ). This is not completely accurate but reasonable enough to be presented in the interview.

The actual time complexity ( O(4^n/\sqrt{n})O(4
​n
​​ /√
​n
​
​​ ) ) is bounded by the Catalan number and is beyond the scope of a coding interview. See more details here.

Space complexity #
All the additional space used by our algorithm is for the output list. Since we can’t have more than O(2^N)O(2
​N
​​ ) combinations, the space complexity of our algorithm is O(N*2^N)O(N∗2
​N
​​ )
**/
