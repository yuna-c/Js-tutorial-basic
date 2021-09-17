// 클래스의 상속 생성자 함수 변경
class Parent{
    name;

    constructor(name){
        this.name = name;
    }
    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{
    age;

    constructor(name, age){
        super(name);
        // 부모의 constructor의 행위를 받아서 실행 하고 자식 요소에서 할 것들을 하기 위해 supper로 받아옴
        this.age = age;
    }

    //오버라이딩
    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('Mark');
const c = new Child('Mark',39);

console.log(p, c);
c.hello();