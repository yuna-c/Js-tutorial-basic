//객체 리터럴
const a = {};
/*
상수는 변하지 않는 변수를 의미하며(메모리 위치) 메모리 값을 변경할 수 없다.
리터럴은 변수의 값이 변하지 않는 데이터(메모리 위치안의 값)를 의미한다. 
보통은 기본형의 데이터를 의미하지만, 특정 객체(Immutable class , VO class)에 한에서는 리터럴이 될 수 있다.
*/ 


console.log(a, typeof a);

const b = {
    name : 'NaNa',//문자열 값
};

console.log(b, typeof b);

const c = {
    name : 'Mark',
    hello1(){ //함수
        console.log('hello1', this.name);
    },
    hello2 : function(){
        console.log('hello2', this.name);
    },
    hello3: () => {
        console.log('hello3', this.name);
    }
}

c.hello1();
c.hello2();
c.hello3();