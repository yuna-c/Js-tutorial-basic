//Null

const a = null; //값이 없는 object
console.log(a, typeof a);

//Undefined
let b;

console.log(b, typeof b); //정의되지 않음

b = undefined;
console.log(b, typeof b);

//==비교시 
if(a == b){
    console.log(a == b);   
}

//===타입,값까지 비교
if(a === b){
    console.log(a === b);   
}