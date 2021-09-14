// 생성자 함수로 함수를 만드는 방법(익명함수와 비슷)
// new Function(/* 인자1, 인자2, 인자3, ..., 함수의 바디 = 매개변수*/);
// 매개변수가 문자열로 들어간다
//const hello = new Function();

//console.log(sum(4, 2, 3)); 호이스팅 X
//객체
const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(4, 2, 3));