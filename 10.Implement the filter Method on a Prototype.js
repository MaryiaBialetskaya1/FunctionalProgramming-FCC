//TASK: Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.


// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});