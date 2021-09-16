// get, set
class A {
    _name = 'no name'; //내부적으로만 쓸 경우 언더바

    //겟 함수 접근제어자
    get name(){
        return this._name + '$$$';
    }

    //셋 함수 + 인자 접근제어자
    set name(value){
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark'; //문자열이 set
console.log(a);
console.log(a.name);
console.log(a._name);


//readonly
class B {
    _name = 'no name'; // _ 외부에서 값을 바꾸지 말자

    get name(){
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'Nark';
console.log(b);