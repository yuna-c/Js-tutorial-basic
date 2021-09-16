//new Object() object로 객체 만들기
//object = 기초객체, 내장객체

const a = new Object(); 
console.log(a, typeof a);

const b = new Object(true);
console.log(b, typeof b);

const c = new Object({ mame : 'mark'});//리터럴 객체= 문자 그대로 작성한 객체
console.log(c, typeof c);