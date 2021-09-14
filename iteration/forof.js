// for of -> iterable한 객체에 모두 사용, 반복 가능한 객체(iterable protocol), 커스텀한 객체도 가능
//iterable한 객체(배열)

for (const i of [1, 2, 3]){
    console.log('!',i);
}

// for in -> 모든 프로퍼티에 사용, 객체, 객체 안에 있는 프로포티 하나하나

Object.prototype.test = function() {};

for(const i in {a: 1, b: 2, c: 3}){
    console.log(i);
}