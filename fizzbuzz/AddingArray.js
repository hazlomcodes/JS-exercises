// Write a function which get's an array and an element and returns an array wih this element at the end
const numbers = [1,2];
const append =( arr, el) => {
    return [...arr,el]; // use spread as it doesn't mutate the array
    //arr.push(el) // this mutates and changes original array which is bad approach(using push) 
};

const newNumbers = append(numbers,3);
console.log(newNumbers);
console.log(numbers); 