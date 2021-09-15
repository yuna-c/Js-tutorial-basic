//  함수를 호출하면 함수를 만들어 리턴

function plus(base){ //인자
    return function(num){
        return base + num;
        // 5 + num(아래 넣었던 10)
    }
}

const plus5 = plus(5);
console.log(plus5(10)); //15

const plus7 = plus(7);
console.log(plus7(8)); //15

