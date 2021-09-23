/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled 되었을 떄, then의 함수가 실행됩니다.
then의 함수 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.
비동기가 다 끝나고 처리해 줄 것이 있다면 이렇게 처리
*/

//Promise.all([프로미스 객체들]);

function p(ms){ //밀리세컨즈 fulfilled상태
    return new Promise((resolve, reject) => {
        /* pending 상태 */
        setTimeout(() => {
            resolve(ms);
        }, ms); //인자로 받은 ms 후에 resolve
    })
}

Promise.all([p(1000), p(2000), p(3000), p(4000), p(5000)]).then(messages => {
    console.log('모두 fulfilled된 이후에 실행됩니다❤', messages);
})