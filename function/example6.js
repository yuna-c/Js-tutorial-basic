// 화살표 함수
// () => { arrow function }

// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
    console.log('hello1');
    //함수를 만들어 const hello1이라는 변수에 넣지만, 선언적 방식으로 쓰일 수는 없다 =항상 익명함수
}



// 함수의 매개변수
// 함수를 호출할 때 값을 지정

// 매개변수가 하나일 때, 괄호 생략가능

const hello2 = name => { // () 생략 가능
    console.log('hello2', name)
}

const hello3 = (name, age) =>{
    // 매개변수 하나가 아닐 때는 괄호 꼭 필요
    console.log('hello3', name, age);
}
// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello4 = (name)=>{
    //로직
    return `hello4 ${name}`;
}

//생략 가능(함수)
const hello5 = name => `hello5 ${name}`;
// 다른 로직이 있을 때 중괄호로 로직 작성