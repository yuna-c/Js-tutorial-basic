// static 상속

class Parent{
    static age = 37;
}

class Child extends Parent{}

console.log(Parent.age, Child.age);

// 부모 클래스 -> 자식 클래스 상속
// 부모 클래스-> new 클래스를 통해서 -> new라는 인스턴스가 만들어진다
// 스테틱변수 : 부모로부터 자식으로 내려오고, 함수도 마찬가지
// 멤버 변수, 멤버 함수도 부모인스턴스와 자식인스턴스로 상속 가능