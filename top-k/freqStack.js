/**
Design a class that simulates a Stack data structure, implementing the following two operations:

push(int num): Pushes the number ‘num’ on the stack.
pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.
Example:

After following push operations: push(1), push(2), push(3), push(2), push(1), push(2), push(5)
 
1. pop() should return 2, as it is the most frequent number
2. Next pop() should return 1
3. Next pop() should return 2

**/

const Heap = require("collections/heap");

class FrequencyStack {
  constructor(number) {
    this.number = number;
    this.freqMap = {};
    this.maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  }
  updateFreqMap(num) {
    if (!(num in this.freqMap)) {
      this.freqMap[num] = 0;
    }
    this.freqMap[num]++;
  }
  push(num) {
    this.updateFreqMap(num);
    let latestFreq = this.freqMap[num];
    this.maxHeap.push([latestFreq, num]);
  }
  pop() {
    let key = this.maxHeap.peek();
    this.freqMap[key] -= 1;
    if (this.freqMap[key] <= 0) {
      delete this.freqMap[key];
    }
    return this.maxHeap.pop()[1];
  }
}
const frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());

/**
Time complexity #
The time complexity of push() and pop() is O(logN)O(logN) where ‘N’ is the current number of elements in the heap.

Space complexity #
We will need O(N)O(N) space for the heap and the map, so the overall space complexity of the algorithm is O(N)O(N)
**/
