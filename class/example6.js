// static 변수, 함수
// 객체가 아니고, 클래스의 변수와 함수

class A {
    // static 변수
    static age = 37;
    static hello(){
        console.log(A.age);
        //클래스의 함수
    }
}

console.log(A, A.age);
A.hello();

// [class A] { age: 37 } 37
// 37


//말이 안되는 문법
class B {
    age = 37;
    static hello(){
        console.log(this.age);
    }
}

console.log(B, B.age);
B.hello();
//new B().hello(); //객체에 속해있는 함수가 아니다

//[class B] undefined
// undefined

class C {
    static name = '이 클래스의 이름을 C가 아니다';
    //static의 네임변수에 할당한 값이 A자리에 들어온다
}
console.log(C);