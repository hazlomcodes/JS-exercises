function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if (i % 2 === 0 && i % 3 === 0)console.log("Fizz Buzz");
        else if (i % 3 === 0)console.log("Buzz");
        else if (i % 2 === 0)console.log("fizz");
        else console.log(i);
     }
}

fizzBuzz(100);

for (let i = 1; i <= 100; i++) {
    let output = "";

    if( i % 3 === 0) {output += "fizz";}
    if(i % 5 === 0) {output += "buzz";}
    
    if (output === "") {output = i;}

    console.log(output);
}