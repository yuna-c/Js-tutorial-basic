// 선언적 function(example1)과 익명함수를 만들어 변수에 할당(example2)의 차이
var hello2;
console.log(hello2);
// hello2가 뭔지는 알지만, 함수가 아니라고 판단하니까 undefined

hello1();
//hello2();
hello3();

// 선언적 방법
function hello1(){
    console.log('hello1');
}

// 익명함수
hello2 = function (){
    console.log('hello2');
}

// hello3이 정의되지 않음, 선언한 적이 없는 
const hello3 = function(){
    console.log('hello3');
}