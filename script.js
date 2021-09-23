// Frequency Counter Patterns -

// this pattern uses objects or sets to collect values/ frequencies of values.
// this can often avoid the need for nested loops with arrays/ strings

// write a function called same, which accepts two arrays.
// the function should return true if every value in the array,
// has its corresponding value squared in the second array.
// the frequency of values must be same.

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]));




// Given two strings, write a function to determine if the 
// second string is an anagram of the first.

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  console.log(validAnagram('anagrams', 'nagarams'));

//   Multiple Pointers -  creating pointers or values that correspond to an
//   index or position and move towards the beginning, end or middle based on

// write a function called sumZero which accepts a sorted array of integers.
// the function should find the first pair where the sum is 0. return an array which 
// includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return[arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,0,1,2,3,10]));

// Count unique values in a sorted Array

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]));



// Sliding window pattern - involves creating a window which can 
// either be an array or a number from one position to another.
// window might increase or closes depending on the condition.

// Write a function called maxSubarraySum which accepts an Array
// of integers and a number called n. The function should calculate the 
// max sum of n consecutive elements in the Array.

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySum([2,6,9,24,1,89,5,6,93,8,6,5,3,8,37,66],3));

//   Divide and Conquer - involves dividing a data set into smaller chunks 
//   and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.

//   a certain condition. 
//   very efficient for solving problems with minimal space complexity


// Given a sorted array of integers, write a function called Search,
// that accepts a value and returns the index where the value passed to the function 
// is located. If the value is not found, return -1


// Write a function sameFrequency. Given two positive integers, find out if 
// two numbers have same frequency of digits.

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


// Implement a function called areThereDuplicates, which accepts a variable no of
// arguments and checks whether there are any duplicates among the arguments passed.

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

//   averagePair Solution


  function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }


//   isSubsequence Solution - Iterative


  function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }
  
//   isSubsequence Solution - Recursive but not O(1) Space

  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }

//   maxSubArray Solution


  function maxSubarraySum(arr, num){
      if (arr.length < num) return null;
   
      let total = 0;
      for (let i=0; i<num; i++){
         total += arr[i];
      }
      let currentTotal = total;
      for (let i = num; i < arr.length; i++) {
         currentTotal += arr[i] - arr[i-num];
         total = Math.max(total, currentTotal);
      }
      return total;
  }


//   minSubArrayLen Solution


  function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

//   findLongestSubstring Solution

  function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }


