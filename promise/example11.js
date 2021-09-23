/*
마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행됩니다.
*/

function p(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve();
            reject(); /* rejected 호출이 거부되는 상태 */
        }, 10000);
    })
}

p()
    .then(()=>{// 비동기 함수가 성공적으로 임무를 완수 했을 때
        console.log('1초 후 fulfilled❤ 됩니다.');
    })//체이닝 가능
    .catch(()=>{ // 비동기 함수가 임무를 진행하다 잘못됬다고 알려줄 때
        console.log('1초 후 rejected❤ 됩니다.'); // 1초 후에 rejected 됨
    });

