// 프로토타입 체인 : 모든 객체들을 연결해 사용하는 것

function Person(name, age){ //생성자함수
    this.name = name;
    this.age = age;
    // this.hello = function(){ 프로포티
    //     console.log('hello', this.name, this.age);
    // };
}

Person.prototype.hello = function(){// 프로토타입의 프로포티
    console.log('hello',this.name, this.age);
}

const p = new Person('Yuna',31);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor); // 함수 자체
console.log(Person.prototype.hello); //프로포티로 hello

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor); //오브젝트 객체의 생성자 함수

console.log(p instanceof Person); // p가 어떤것으로부터 나온 연산자인지
console.log(p instanceof Object); // p라는 객체가 Object로 부터 나온 인스턴스냐 