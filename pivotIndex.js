function pivotIndex(nums) {
  let left = 0;
  let right = 0;
  let pivot = -1
  const total = nums.reduce((acc, val) => acc + val, 0,);

  for (let i = 0; i < nums.length; ++i) {
    left = i !== 0 ? left + nums[i - 1] : 0;
    right = total - left - nums[i];
    if (right === left) {
      return i
    }
  }
  return pivot
};
