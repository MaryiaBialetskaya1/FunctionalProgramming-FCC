//TASK:Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

//concat do not mutate any of arrays

function nonMutatingConcat(original, attach) {
    return original.concat(attach);
  }

  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);

  console.log(nonMutatingConcat(first, second))