// question 1
console.log(foo);
foo = 1; // returns error

// question 2
console.log(foo);
var foo = 2; // undefined 

foo = 3;
console.log(foo)
var foo; // equal 3 bubbles to the top

// can use const and let with no problems as const and let don't bubbble up if defined on line 10 remain on line 10
// i use onst and let in every project so have no problem with hoisting 