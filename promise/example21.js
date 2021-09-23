/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then의 함수가 실행됩니다.
then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려줍니다.
*/

//Promise.race([프로미스 객체들]);

function p(ms){ //밀리세컨즈 fulfilled상태
    return new Promise((resolve, reject) => {
        /* pending 상태 */
        setTimeout(() => {
            resolve(ms);
        }, ms); //인자로 받은 ms 후에 resolve
    })
}

Promise.race([p(1000), p(2000), p(3000), p(4000), p(5000)]).then(message => {
    console.log('가장 빠른 하나가 fulfilled된 이후에 실행됩니다❤', message);
})