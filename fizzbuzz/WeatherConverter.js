const celsius = 26;
// converts celsius to farenheit and stores the value in farenheit variable
let farenheit = celsius * (9/5) + 32;
// rounds the Farenhiet Temp down and saves it to farenheit variable
farenheit = Math.floor(farenheit);
// Convert to Newton and store in newton variable
let newton = celsius * (33 / 100);
// round down using math.floor again
newton = Math.floor(newton);

console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);