alert('var2');

//함수 스코프 (안에서, 밖에서 모두가 출력)
var c = 0; 
{
    c++;
    console.log(c);
}
console.log(c);


//문제 : var은 문제 없이 출력, 함수스코프 변수 선언 방식은 스코프의 의미를 가지고 있지 않음
{
    var d = 0;
    console.log(d);
}
console.log(d);