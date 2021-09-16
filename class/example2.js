// 생성자(constructor)

class A {}
console.log(new A());

class B { // B가 객체로 생성이 될 때, constructor라고 하는 함수가 생성됨
    constructor(){ //외부에서 입력 받음
        console.log('constructor');
    }
}
console.log(new B());

class C {
    constructor(name, age){
        console.log('constructor😊', name, age);
    }
}

console.log(new C('YUNA',31));
console.log(new C('YUNQA',31));
console.log(new C());