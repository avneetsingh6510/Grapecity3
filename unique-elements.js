function getUnique(arr1, arr2) {
  let combined = [...arr1, ...arr2];
  let unique = [];

  for (let item of combined) {
    if (combined.indexOf(item) === combined.lastIndexOf(item)) {
      unique.push(item);
    }
  }

  return unique;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

console.log(getUnique(array1, array2));