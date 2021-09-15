// 생성자 함수로 객체 만들기
// function 틀(){} => new 틀()(인스턴스 생성ㅠ)

function A(){}
const a = new A(); // newA가 a라는 객체에 할당
console.log(a, typeof a);
//A {} object
console.log(A());// 생성자 함수가 아니기 때문에, 객체를 만들어내는 것이아니라 함수를 실행하고, 리턴을 가지고 오지만 리턴이없어서 undefined 

// 생성하면서 데이터 넣기
function B(name, age){
    console.log(name, age);
};

//객체 생성
const b = new B();// 인자없이 생성한 객체 undefined
const c = new B('yuna', 31); // 인자 있는  생성자 함수
console.log(B());

function C(na, ga){
    console.log(na, ga);
}
const d = new C();
const e = new C('na1','ga1');
console.log(c, typeof c);
console.log(C());