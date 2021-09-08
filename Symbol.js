//Symbol 고유한 것
const a = Symbol();
const b = Symbol(37);
// C와 D는 고유한 다른 것 
const c = Symbol('Mark');
const d = Symbol('Mark');

console.log(b, typeof b);
console.log(c === d);

new Symbol();