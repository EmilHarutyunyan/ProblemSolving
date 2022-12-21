
// 1
function countBits(num) {
  let count = 0;

  while (num) {
    count += num & 1;
    num = num >> 1;
  }

  return count;
}
// Time complexity: O(logn)
// Space complexity: O(1)

// 2
function evenOrOdd(num) {
  let answer = "";

  if (count_of_bits(num) & 1) {
    answer = "odd";
  } else {
    answer = "even";
  }

  return answer;
}
// Time complexity: O(logn)
// Space complexity: O(1)

// 3
function swapBit(num, i, j) {
  return (1 << i) ^ (1 << j) ^ num;
}
// Time complexity: O(1) 
// Space complexity: O(1)

// 4
function reverseBit(n) {
  let shift = 31;
  let res = 0;
  while (shift != 0) {
    res |= (n & 1) << shift;
    --shift;
    n >>>= 1;
  }

  return res;
}

// Time complexity: O(1)
// Space complexity: O(1)