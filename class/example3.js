// 멤버 변수
class A {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('YUNA',31));

// class field는 런타임 확인(node12 이상부터 undefinde)
class B { // class의 필드를 직접 써주는 방식
    name; // this.name
    age;  // this.age
}

console.log(new B());

class C {
    name = 'no name'; //초기값 설정
    age = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};

console.log(new C('NANA',5));