//TASK:Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

//The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

function checkPositive(arr) {
    return arr.some(num => num > 0)
  }

  checkPositive([1, 2, 3, -4, 5]);

  console.log(checkPositive([1, 2, 3, -4, 5]))