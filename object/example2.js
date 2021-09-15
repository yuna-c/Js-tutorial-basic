// 객체에 속성 추가하기(property)

// 값을 속성으로 넣기

function A(){ //생성자 함수로 사용
    //객체
    this.name = 'Mark';
}

const a = new A(); // {name:'Mark'}, 객체 생성
console.log(a);

// 함수를 속성으로 넣기
function B(){
    this.hello = function(){
        console.log('hello');
    }
}

(new B()).hello(); //함수 실행

function D(){
    this.hello = function(){
        console.log('hello❤');
    }
}

(new D()).hello();

// new Function() -> 표준 내장 객체, Function생성자 함수

 function C(){
     this.name = 'Yuna';
     this.age = 33;
 }


 const c = new C();
 console.log(c);