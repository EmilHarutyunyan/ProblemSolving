function productExceptSelf(nums) {
  const answer = [];
  const arrRes = [];

  for (let i = 0, num = 1; i < nums.length; ++i) {
    arrRes[i] = num;
    num *= nums[i]
  }

  for (let j = nums.length - 1, i = 0, num = 1; j >= 0; --j, ++i) {
    answer[j] = num * arrRes[j];
    num *= nums[j];
  }

  return answer
}
