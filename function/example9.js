// 함수를 인자로 하여 함수를 호출

function hello(c)/*callback*/{
    console.log('hello');
    c();
}

hello(function() { //익명, 화살표 함수 쌉가능
    console.log('콜백');
});
//hello(() =>{});