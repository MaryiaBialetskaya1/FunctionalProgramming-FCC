//Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

//Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  let newArr = [...bookList]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove(bookList, bookName) {
  let newArr = [...bookList]; // Copy the bookList array to a new array.
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1); //// Remove the given paramater from the new array.
    return newArr; // Return the new array.
    }
}