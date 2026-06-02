function minAddToMakeValid(s) {
  let open = 0, close = 0;

  for (let c of s) {
    if (c === '(') {
      open++;
    } else if (open > 0) {
      open--;
    } else {
      close++;
    }
  }

  return open + close;

};


// console.log(minAddToMakeValid("()))(("));


function callPoints(operations) {

  let record = [];

  for (let op of operations) {
    if (op === "+") {
      record.push(record[record.length - 1] + record[record.length - 2]);
    } else if (op === "D") {
      record.push(record[record.length - 1] * 2);
    } else if (op === "C") {
      record.pop();
    } else {
      record.push(Number(op));
    }
  }

  let totalSum = 0;

  for (let score of record) {
    totalSum += score;
  }

  return totalSum;

}


// console.log(callPoints(["5", "2", "C", "D", "+"]))



function sortPeople(names, heights) {

  let length = heights.length;
  let map = new Map();
  for (let i = 0; i < length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  let res = [];
  for (let height of heights) {
    res.push(map.get(height));
  }
  return res;
};


// console.log(["Alice","Bob","Bob"], heights = [155,185,150]);



function findErrorNums(nums) {

  const hashmap = new Map();
  const output = [];
  let duplicate = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hashmap.has(num)) {
      duplicate = num;
    }

    hashmap.set(num, 1);
  }

  let missing = -1;

  for (let i = 1; i <= nums.length; i++) {
    if (!hashmap.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}



// console.log(findErrorNums([3, 2, 3, 4, 5]))


function isHappy(n) {
  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = squareOfDigits(n);
  }
  return true;
}

function squareOfDigits(num) {
  let sum = 0;

  // Calculate sum of squares of digits
  while (num !== 0) {
    let val = num % 10;
    sum += val * val;

    num = Math.floor(num / 10);
  }

  return sum;
}



// console.log(isHappy(7))

function isPalindrome(n) {
  let str = n.toString();

  let left = 0;
  let right = str.length - 1;

  // Compare characters from both ends
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}


// console.log(isPalindrome(12345))



var fairCandySwap = function (aliceSizes, bobSizes) {
  let sumAlice = aliceSizes.reduce((a, b) => a + b, 0);
  let sumBob = bobSizes.reduce((a, b) => a + b, 0);

  let diff = (sumAlice - sumBob) / 2;

  // Store Bob's candies for quick lookup
  let map = new Map();

  for (let candy of bobSizes) {
    map.set(candy, true);
  }

  for (let candy of aliceSizes) {
    let target = candy - diff;

    if (map.has(target)) {
      return [candy, target];
    }
  }
};


// console.log(fairCandySwap(aliceSizes = [1, 2], bobSizes = [2, 3]))



function nextGreatestLetter(letters, target) {
  // Remove duplicate letters
  let uniqueLetters = [...new Set(letters)];

  for (let ch of uniqueLetters) {
    if (ch > target) {
      return ch;
    }
  }

  // Wrap around to first character
  return uniqueLetters[0];
}



// console.log(nextGreatestLetter(letters = ["x", "x", "y", "y"], target = "z"))




function searchRange(nums, target) {

  let first = -1;
  let last = -1;

  // Binary Search for First Position

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    else {
      first = mid;
      end = mid - 1;
    }
  }

  // Binary Search for Last Position
  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] < target) start = mid + 1;
    else if (nums[mid] > target) end = mid - 1;
    else {
      last = mid;
      start = mid + 1;
    }
  }

  return [first, last];
};



// console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 6));






function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  // Binary search for a peak
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};



// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))





var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  // Dutch National Flag Algorithm
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
};


// console.log(sortColors([2, 0, 2, 1, 1, 0]))








function maxCount(nums) {

  let neg = left(nums, 0);
  let pos = nums.length - right(nums, 0);
  return Math.max(pos, neg);

};

function left(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let ans = nums.length;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}


function right(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let ans = nums.length;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] > target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}


// console.log(maxCount([5, 20, 66, 1314]))



function minimumSum(num) {

  let digits = num.toString().split('').sort();

  // Arranged digits to minimize the final sum
  let new1 = digits[0] + digits[2];
  let new2 = digits[1] + digits[3];

  return Number(new1) + Number(new2);
};


// console.log(minimumSum(4009));




function transitionPoint(arr) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  // Find first occurrence of 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 1) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}


console.log(transitionPoint([0, 0, 0, 0]))




