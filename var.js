alert('var');

//블록
var a = 0; // let처럼 바꿀 수 있는 변수
console.log(a);
(function(){
    a++;
    console.log(a);
})();
console.log(a);

(function(){
    var b = 4;
    console.log(b);
})();

b++;
console.log(b);