//TASK: Let's update the incrementer function to clearly declare its dependencies.

//Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

// The global variable
let fixedValue = 4;

function incrementer(value) {
  return value + 1;
}
let newValue = incrementer(fixedValue);
console.log(fixedValue)
console.log(newValue)