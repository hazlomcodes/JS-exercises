// check if a number is a multiple of 3 or 5

function solution(number){
    let sum = 0;
    
    for (let i = 1; i < number; i++) 
      if (i % 3 === 0 || i % 5 === 0) sum += i;
    
    return sum;
  }