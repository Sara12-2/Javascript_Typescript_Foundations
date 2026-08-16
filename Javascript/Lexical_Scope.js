//lexical scope 
//inner function apny outer scope ky variable ko access kr skhty hain 


function outer() {
    const name = "Sara";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
//sara 