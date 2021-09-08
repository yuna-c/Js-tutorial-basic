//Boolean

const isTrue = true; //참(불린 타입의 변수)
const isFalse =false; //거짓(불린 타입의 변수)

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);


//1 새로운 객체
const a = new Boolean(false); 

console.log(a, typeof a);

if(a) { //객체
    console.log('false?');//조건문 안이 실행
}

//2 함수
const b = Boolean(false);

console.log(b, typeof b);

if(b) { 
    console.log('false?');//조건문 안이 실행
}