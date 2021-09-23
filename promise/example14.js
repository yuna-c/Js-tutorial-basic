/*
보통 reject 함수를 실행하며 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있습니다.
reject('error');
then((reason)=>{...})
*/


function p() {
    return new Promise((resolve, reject)=>{
        /* pending */
        setTimeout(()=>{
            //resolve('연결 성공');
            reject(new Error('bad')); //에러객체
        }, 1000);
    });
}

p()
    .then(message => {
        console.log('1초 후 fulfilled❤ 됩니다.', message);
    })
    .catch(error => {
        console.log('1초 후 rejected❤ 됩니다.', error);
    })