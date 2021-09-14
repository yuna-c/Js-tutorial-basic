// const hello = function() {} :변수 = 함수를 만들 때 사용하는 키워드

// funtion
// 이름이 hello1인 함수를 선언

const hello1 = function(name){
    // return `hello1 ${name}`;
    console.log('hello1');
};
console.log(hello1, typeof hello1);
console.log(hello1('nana'));

// 함수의 매개변수
// 함수를 호출 할 때 값을 지정
const hello2 = function(name){ // 바디 = 매개변수
    console.log('hello2', name);
}
console.log(hello2('nana'));

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
const hello3 = function(name){
    return `hello3${name}`;
}
console.log(hello3('Yuna'));