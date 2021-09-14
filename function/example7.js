// new를 사용하여 하나의 객체들로 사용 할 수 있다.
// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age){
    console.log(this); //객체를 가르키는 용도
    this.name = name;
    this.age = age;
}

const p = new Person('Mark','31');

console.log(p, p.name, p.age);

// 객체를 만드는 하나의 방법
const a = new Person('Unn','32');
console.log(a, a.name, a.age);

//arrow는 this가 만들어지지 않아서 생성자 함수로 만들 수 없음XXX
// const Cat = ('name','age') => {
//     console.log(this);
//     this.name = name;
//     this.age = age;
// };
// const c = new Cat('냥이','1');