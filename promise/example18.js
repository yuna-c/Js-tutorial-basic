/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
value가 프로미스 객체면, resolve 된 then 메서드를 실행합니다.
value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행합니다.
*/

//Promise.resolve 프로미스 객체O
//프로미스라는 전역 객체의 resolve라고 하는 함수를 실행하며 promise 만들어 내는 것
Promise.resolve(/* value / 인자 1. promise 객체 2. 일반 값 */);

Promise.resolve(new Promise((/*excutor*/resolve, reject) => { //프로미스 객체를 resolve의 인자인 value에 넣어주는 것 
    setTimeout(()=>{
        resolve('foo');
    }, 1000);
})).then((data)=>{ // 프로미스 객체를 resolve 시킨 후에 then 부름 
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행 됩니다.', data);
});

// 프로미스 객체X
Promise.resolve('bar').then(data => { //bar value =>문자열
    console.log('then 메서드가 없는 경우, fullfilled 됩니다.', data);
});