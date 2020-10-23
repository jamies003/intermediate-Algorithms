function maxSubArray(nums, start = 0, end = nums.length - 1) {
    if (start > end) return -Infinity;
  
    const middle = Math.floor((start + end) / 2);
  
    let maxLeft = 0;
    let currentSum = 0;
    for (let i = middle - 1; i >= start; i--) {
      currentSum += nums[i];
      maxLeft = Math.max(maxLeft, currentSum);
    }
  
    let maxRight = 0;
    currentSum = 0;
    for (let i = middle + 1; i <= end; i++) {
      currentSum += nums[i];
      maxRight = Math.max(maxRight, currentSum);
    }
  
    return Math.max(maxLeft + nums[middle] + maxRight,
      Math.max(maxSubArray(nums, start, middle - 1), maxSubArray(nums, middle + 1, end)));
  };
  
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6