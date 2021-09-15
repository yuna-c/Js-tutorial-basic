// 전역에서 가지고오는 것 가능
global.a = 0;

{
    const a = 1; 

    const test = new Function('return a'); // 변수가 상위 지역변수에 접근이 안된다

    console.log(test());
    //a is not defined 
    // 0
}

{
    const a = 2; 
    const test = function(){ 
        return a;
    }

    console.log(test());

    // 2
}