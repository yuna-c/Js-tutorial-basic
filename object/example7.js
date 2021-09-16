// 표준 내장 객체 : Array
const a = new Array('red','black','white');// 생성자함수로 표현(배열)
console.log(a, typeof a);

//[ 'red', 'black', 'white' ] object 
console.log(a instanceof Array); //array의 인스턴스
console.log(a instanceof Object); //object의 인스턴스

const b = ['red','green','yellow'];//리터럴 표현법
console.log(b, typeof b);
console.log(b instanceof Array); //array의 인스턴스
console.log(b instanceof Object); //object의 인스턴스

console.log(b.slice(0,1));
console.log(Array.prototype.slice, Object.prototype.slice);