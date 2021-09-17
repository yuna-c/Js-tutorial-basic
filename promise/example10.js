/*
then을 설정하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에 then을 설정합니다
*/


// p 함수가 호출 될때 Promise 객체가 만들어지고 return함
function p(){
    return new Promise((resolve,reject)=>{ //Promise 객체가 만들어지는 순간
        /* pending */
        setTimeout(() =>{
            resolve(); /* fulfilled */
        }, 1000);
    });
}
 
p().then(()=>{ //fulfilled 상태일 때 실행할 
    console.log('1000ms 후에 fulfilled 됩니다❤');
})