//삼항 연산자
// 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// 중괄호 {}를 사용할 수 없는 문법이기 떄문에 하나의 표현식만 가능

let n = 5;
console.log(n % 5 === 0? '5의 배수입니다.' : '5의 배수가 아닙니다.'); // A : B가 전체 결과의 값
console.log(n % 5 === 0? '5의 배수' : '5의 배수 아님');
//표현식의 결과를 변수에 할당 할 수 있음

const message = n % 5 === 0? '5의 배수입니다!' : '5의 배수가 아닙니다!';
console.log(message);//문자열 바로 출력

function getFee(isNmuber){
    return(isNmuber ? '$2:00' : '$10:00');
}
console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));

const age = 26;
let beverage = (age >= 21) ? "beer" : "juice";
console.log(beverage);

let greeting = person =>{
    let name = person ? person.name : 'stranger'
    return `Howdy, ${name}`
}
console.log(greeting({name : `Alice`}));  //"Howdy, Alice"
console.log(greeting(null));


let value1 = 1;
let value2 = 2;
let value3 = 3;
let value4 = 4;

let condition1 = value1 + '1'; 
function example(condition1,condition2,condition3){
    return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}

console.log(example(true));
console.log(example(false));
console.log(example(null));

function example2(condition1,condition2,condition3) {
    if (condition1) { return value1 +`!`; }
    else if (condition2) { return value2 +`!`; }
    else if (condition3) { return value3 +`!`; }
    else { return value4; }
}

console.log(example2(true), typeof value1);
console.log(example2(false), typeof condition2);
console.log(example2(null), typeof example2);

// let n = 5;
// n % 5 === 0? '5의 배수입니다.' : '5의 배수가 아닙니다.'