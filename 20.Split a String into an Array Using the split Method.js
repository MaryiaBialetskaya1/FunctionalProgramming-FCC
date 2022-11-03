//TASK: Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
    return str.split(/\W/);
  }

  splitify("Hello World,I-am code");

  console.log(splitify("Hello World,I-am code"));

//  /\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores. It’s equivalent to /[^A-Za-z0-9_]/.

//The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.