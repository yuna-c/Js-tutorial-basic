/*
마찬가지로, executor 의 reject 함수를 실행할 떄 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있다.
reject('error');
then((reason)=>{...})
*/

function p() {
    return new Promise((resolve, reject)=>{
        /* pending */
        setTimeout(()=>{
            //resolve('연결 성공');
            reject('네트워크 error로 실패');
        }, 1000);
    });
}

p()
    .then(message => {
        console.log('1초 후 fulfilled❤ 됩니다.', message);
    })
    .catch(reason => {
        console.log('1초 후 rejected❤ 됩니다.', reason);
    })