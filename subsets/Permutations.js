/**
Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

{1, 2, 3}
{1, 3, 2}
{2, 1, 3}
{2, 3, 1}
{3, 1, 2}
{3, 2, 1}
If a set has ‘n’ distinct elements it will have n!n! permutations.

Example 1:

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

**/


const Deque = require("collections/deque"); //http://www.collectionsjs.com
debugger;
function find_permutations(nums) {
  let result =[];
  let numLength = nums.length;
    let queue = new Deque();
    queue.push([]);
  for (var i=0;i<numLength;i++){
    let current_number = nums[i];
    let queueLength = queue.length;
    for (var p=0;p<queueLength;p++){
      let old_permutation = queue.shift();
      for (var j =0;j<old_permutation.length+1;j++){
        let new_permutation = old_permutation.slice(0);
        new_permutation.splice(j,0,current_number);
        if (new_permutation.length === nums.length){
          result.push(new_permutation);
        }else{
          queue.push(new_permutation);
        }
      }
    }

  }
  return result;
}

console.log("Here are all the permutations:");
const result = find_permutations([1, 3, 5]);
result.forEach(permutation => {
  console.log(permutation);
});

/**
Time complexity #
We know that there are a total of N!N! permutations of a set with ‘N’ numbers. In the algorithm above, we are iterating through all of these permutations
with the help of the two ‘for’ loops. In each iteration, we go through all the current permutations to insert a new number in them on line 17 
(line 23 for C++ solution). To insert a number into a permutation of size ‘N’ will take O(N),O(N), which makes the overall time complexity of our algorithm O(N*N!)O(N∗N!).

Space complexity #
All the additional space used by our algorithm is for the result list and the queue to store the intermediate permutations. If you see closely, at any time,
we don’t have more than N!N! permutations between the result list and the queue. Therefore the overall space complexity to store N!N! permutations each 
containing NN elements will be O(N*N!)O(N∗N!).
**/
