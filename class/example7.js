// extends 상속 기본

class Parent {
    name = 'Choi';

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{}

const p = new Parent();
const c = new Child();
console.log(p, c);
// Parent { name: 'Lee' :멤버변수} Child { name: 'Lee' }

c.hello();
c.name = 'Anna';
c.hello();

// hello Choi
// hello Anna