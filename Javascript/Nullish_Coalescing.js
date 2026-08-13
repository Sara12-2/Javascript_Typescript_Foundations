//Nullish Coalescing
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.


let username = null;

console.log(username ?? "Guest");//Guest 
//agr left side pr null ya undefined ho to right side return kry ga agr left side koi er value h (even 0,",flase) to left side return kry ga ")
// || (OR)	null, undefined, 0, "", false, NaN sab ko`

console.log(0 || 100); //100
console.log(0 ?? 100); //0