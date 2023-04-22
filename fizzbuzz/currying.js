// write a function which helps achieve multiply (a)(b) and returns product of a and b

const multiply = (num1) => {
    return (num2) => {
        return num1 * num2;
    };
};

console.log(multiply(2))