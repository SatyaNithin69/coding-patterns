/**
Finding compliment

Solution #
Recall the following properties of XOR:

It will return 1 if we take XOR of two different bits i.e. 1^0 = 0^1 = 1.

It will return 0 if we take XOR of two same bits i.e. 0^0 = 1^1 = 0. In other words, XOR of two same numbers is 0.

It returns the same number if we XOR with 0.

From the above-mentioned first property, we can conclude that XOR of a number with its complement will result in a number that has all of its
bits set to 1. For example, the binary complement of “101” is “010”; and if we take XOR of these two numbers, we will get a number with all bits set to 1,
i.e., 101 ^ 010 = 111

We can write this fact in the following equation:

number ^ complement = all_bits_set
Let’s add ‘number’ on both sides:

number ^ number ^ complement = number ^ all_bits_set
From the above-mentioned second property:

0 ^ complement = number ^ all_bits_set
From the above-mentioned third property:

complement = number ^ all_bits_set
We can use the above fact to find the complement of any number.

How do we calculate ‘all_bits_set’? One way to calculate all_bits_set will be to first count the bits required to store the given number.
We can then use the fact that for a number which is a complete power of ‘2’ i.e., it can be written as pow(2, n), if we subtract ‘1’ from such a number,
we get a number which has ‘n’ least significant bits set to ‘1’. For example, ‘4’ which is a complete power of ‘2’, and ‘3’ (which is one less than 4) has 
a binary representation of ‘11’ i.e., it has ‘2’ least significant bits set to ‘1’.
**/

function calculate_bitwise_complement(num) {
  let n = num;
  let count = 0;
  while (n > 0) {
    count++;
    n = n >> 1;
  }

  let allSet = Math.pow(2, count) - 1;

  return num ^ allSet;
}

console.log(`Bitwise complement is: ${calculate_bitwise_complement(8)}`);
console.log(`Bitwise complement is: ${calculate_bitwise_complement(10)}`);

/**
Time Complexity #

Time complexity of this solution is O(b) where ‘b’ is the number of bits required to store the given number.

Space Complexity #
Space complexity of this solution is O(1).

**/
