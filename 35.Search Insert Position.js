/*
https://leetcode-cn.com/problems/search-insert-position/
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。
示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
	let hash = [];
  let len = nums.length
	for (let i = 0; i < len; i++)
		hash[nums[i]] = i;
	if (hash[target] !== undefined)
		return hash[target];

	nums[-1] = -Number.MAX_VALUE;
	nums[len] = Number.MAX_VALUE;

	for (let i = 0; i <= len; i++)
		if (nums[i - 1] < target && target < nums[i])
			return i;
};
