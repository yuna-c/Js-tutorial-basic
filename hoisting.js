//함수 먼저 호출
function hello1(){
    console.log('hello');
}

hello1();

//함수의 호출을 먼저
hello2();

function hello2(){
    console.log('hello2');
}

//문제 없어
age = 6;
age++;
console.log(age);

var age;

//위에서 출력한 데이터가 안나올 때
console.log(name);

name= 'Mark';

console.log(name);

var name = "Yuna";


//let hoisting x 니까 Cannot access
console.log(example);

example = "Nana";

console.log(example);

let example;