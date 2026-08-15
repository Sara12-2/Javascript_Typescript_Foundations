//Rest operator 
//Rest opertaor Multiple values ko ek single array me convert karta hai

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);


function calculate(a, b, ...remaining) {
    console.log(a);         // 10
    console.log(b);         // 20
    console.log(remaining); // [30, 40, 50]
}

calculate(10, 20, 30, 40, 50);
//Pehli 2 values a aur b mein gayen.

// Baaki sab (30, 40, 50) ...remaining mein collect ho gaye array mein.

//Main point 
//Spread vs Rest Spread=expand and Rest=collect Same ... Syntax hota h er context differnt hota h 


//Array/object ke andar = Spread.

//Function parameters mein = Rest.

function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));