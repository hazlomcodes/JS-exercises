// remove all duplicates in array

const uniqueArray = (arr) => {
    return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
}, []);
};     