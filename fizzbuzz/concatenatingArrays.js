// write a function that will concatenate 2 Arrays

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]; //concat doesn't mutate array returns new array
};

const arr1 = [1];
const arr2 = [2,3];
const result = mergeArrays(arr1,arr2);
console.log(result, arr1, arr2);
