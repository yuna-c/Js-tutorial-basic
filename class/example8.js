//override
// 변수, 함수 추가 및 오버라이딩

class Parent{
    name = 'lee';

    hello(){
        console.log('hello', this.name);
    }
}
//부모가 가지고 있는 멤버 변수와 함수를 가져옴
class Child extends Parent{
    age = 37;

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();